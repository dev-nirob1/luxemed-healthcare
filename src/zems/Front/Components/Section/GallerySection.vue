<script setup>
import { onMounted, ref } from "vue";

const galleryRef = ref(null);
const galleryItems = [
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    title: "Modern Diagnostics",
    size: "large",
  },
  {
    url: "https://images.unsplash.com/photo-1666214280557-f1b5022eb334?q=80&w=2070&auto=format&fit=crop",
    title: "Surgical Excellence",
    size: "tall",
  },
  {
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2074&auto=format&fit=crop",
    title: "Advanced Laboratory",
    size: "wide",
  },
  {
    url: "https://images.unsplash.com/photo-1504813184591-01592fd039d5?q=80&w=2071&auto=format&fit=crop",
    title: "Healing Spaces",
    size: "square",
  },
  {
    url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop",
    title: "Patient Care",
    size: "square",
  },
  {
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    title: "Robotic Surgery",
    size: "wide",
  },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  if (galleryRef.value) {
    const items = galleryRef.value.querySelectorAll(".gallery-item");
    items.forEach((item) => observer.observe(item));
  }
});
</script>

<template>
  <section id="gallery" class="gallery-section">
    <div class="section-header container">
      <div class="section-title">
        <span class="section-label">Visual Journey</span>
        <h2>Architecture of Wellness</h2>
      </div>
      <p class="section-description">
        Explore our world-class facilities designed for comfort, healing, and
        technical precision.
      </p>
    </div>

    <div ref="galleryRef" class="gallery-grid container">
      <div
        v-for="(item, index) in galleryItems"
        :key="index"
        :class="['gallery-item', `item-${item.size}`, 'reveal']"
      >
        <div class="gallery-img-wrapper">
          <img :src="item.url" :alt="item.title" loading="lazy" />
          <div class="gallery-overlay">
            <span class="gallery-item-title">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: var(--section-spacing) 0;
  background: var(--color-background);
}

.container {
  padding: 0 var(--container-padding);
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 60px;
  text-align: center;
}

.section-description {
  max-width: 600px;
  margin: 20px auto 0;
  font-size: 1.1rem;
  color: var(--color-text-light);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  gap: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--card-radius);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
}

.gallery-item.active {
  opacity: 1;
  transform: translateY(0);
}

.gallery-img-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(10, 61, 50, 0.8), transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 30px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-item-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  transform: translateY(10px);
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-item-title {
  transform: translateY(0);
}

/* Gridding Logic */
.item-large {
  grid-column: span 2;
  grid-row: span 2;
}

.item-wide {
  grid-column: span 2;
}

.item-tall {
  grid-row: span 2;
}

/* Responsive */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
    gap: 15px;
  }

  .item-large,
  .item-wide,
  .item-tall {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
