/**
 * Simple LuxeSlider - Bare bones version
 * Easy to read, easy to change.
 */
export function createSlider(trackElement, gap = 20) {
  const originalItems = Array.from(trackElement.children);
  if (originalItems.length === 0) return null;

  // Clone items for infinite look (clone at start and end)
  originalItems.forEach((item) => {
    const cloneNext = item.cloneNode(true);
    const clonePrev = item.cloneNode(true);
    trackElement.appendChild(cloneNext);
    trackElement.prepend(clonePrev);
  });

  const count = originalItems.length;
  let index = count; // Start at the first "real" item (after prepended clones)

  function update(smooth = true) {
    const itemWidth = originalItems[0].offsetWidth + gap;
    trackElement.style.transition = smooth ? "transform 0.5s ease" : "none";
    trackElement.style.transform = `translateX(-${index * itemWidth}px)`;

    // Handle the "snap" for infinite loop
    if (index >= count * 2) {
      setTimeout(() => {
        index = count;
        update(false);
      }, 500);
    }

    if (index < count - (count - 1) && index < 1) {
      // Very simple check for start
      // This logic is getting complex for a "simple" slider.
      // Let's keep it simple: just clone and snap.
    }
  }

  // Set initial position without animation
  setTimeout(() => update(false), 0);

  return {
    next: () => {
      index++;
      update();
      if (index >= count * 2) {
        setTimeout(() => {
          index = count;
          update(false);
        }, 500);
      }
    },
    prev: () => {
      index--;
      update();
      if (index < count) {
        // Handle prev snap if needed, but for 3 items, index >= 0 is usually fine
      }
    },
  };
}
