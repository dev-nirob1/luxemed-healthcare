<template>
  <!-- 5️⃣ Bento Grid Services -->
  <section
    id="services"
    style="padding: var(--section-spacing) var(--container-padding)"
  >
    <div class="section-header">
      <div class="section-title">
        <span class="section-label">Our Specialties</span>
        <h2>Holistic Care Ecosystem</h2>
      </div>
      <div class="section-action">
        <button class="btn btn-secondary">View All Departments</button>
      </div>
    </div>

    <div class="bento-grid">
      <!-- Item 1: Large (Cardiology) -->
      <div class="bento-item bento-large">
        <img
          src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=2070&auto=format&fit=crop"
          class="bento-bg-image"
        />
        <div class="bento-icon"><i class="fas fa-heartbeat"></i></div>
        <div class="bento-content">
          <h3>Cardiology</h3>
          <p>
            Advanced cardiovascular interventions using robotic-assisted
            precision. Your heart is in the safest hands.
          </p>
          <a
            href="#"
            style="
              margin-top: 20px;
              display: inline-block;
              font-weight: 600;
              color: var(--color-primary);
            "
            >Learn More <i class="fas fa-arrow-right"></i
          ></a>
        </div>
      </div>

      <!-- Item 2: Standard (Neurology) -->
      <div class="bento-item">
        <div class="bento-icon"><i class="fas fa-brain"></i></div>
        <div class="bento-content">
          <h3>Neurology</h3>
          <p>Next-gen brain mapping and neuro-rehabilitation services.</p>
          <a
            href="pages/neurology.html"
            style="
              margin-top: 15px;
              display: inline-block;
              font-weight: 600;
              color: var(--color-primary);
              font-size: 0.9rem;
            "
            >Learn More <i class="fas fa-arrow-right"></i
          ></a>
        </div>
      </div>

      <!-- Item 3: Standard (Pediatrics) -->
      <div class="bento-item">
        <div class="bento-icon"><i class="fas fa-child"></i></div>
        <div class="bento-content">
          <h3>Pediatrics</h3>
          <p>Gentle care for future generations in a playful environment.</p>
        </div>
      </div>

      <!-- Item 4: Wide (Diagnostics) -->
      <div class="bento-item bento-wide">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2074&auto=format&fit=crop"
          class="bento-bg-image"
        />
        <div class="bento-icon"><i class="fas fa-dna"></i></div>
        <div class="bento-content" style="position: relative; z-index: 2">
          <h3>Genomic Diagnostics</h3>
          <p>
            Personalized preventive medicine based on your unique DNA profile.
            Predict and prevent illness before it starts.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* Bento Grid System */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, minmax(300px, auto));
  gap: 24px;
}

.bento-item {
  background: var(--color-surface);
  border-radius: var(--card-radius);
  padding: 40px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bento-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-accent);
}

/* Bento Sizes */
.bento-large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-wide {
  grid-column: span 2;
}

.bento-tall {
  grid-row: span 2;
}

.bento-icon {
  width: 60px;
  height: 60px;
  background: var(--color-surface-alt);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 30px;
  transition: background 0.3s ease;
}

.bento-item:hover .bento-icon {
  background: var(--color-accent);
  color: var(--color-primary);
}

.bento-content h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: var(--color-primary);
}

.bento-bg-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
  transition:
    opacity 0.3s ease,
    transform 0.8s ease;
  z-index: 0;
}

.bento-item:hover .bento-bg-image {
  opacity: 0.2;
  transform: scale(1.05);
}
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: 1fr 1fr;
  }

  .bento-large {
    grid-column: span 1;
    grid-row: span 1;
  }

  .bento-wide {
    grid-column: span 2;
  }
}
@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-wide {
    grid-column: span 1;
  }
}
</style>
