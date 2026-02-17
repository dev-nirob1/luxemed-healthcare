<script setup>
import SectionTitle from "../Widget/SectionTitle.vue";
const stats = [
  { value: "15k", label: "Surgeries" },
  { value: "99%", label: "Satisfaction" },
  { value: "350", label: "Specialists" },
  { value: "24/7", label: "Care" },
];
</script>

<template>
  <section class="blueprint-section py-5">
    <div class="container">
      <SectionTitle
        class="mb-3"
        sub-title="Our Architecture"
        title="The Sanctuary Campus"
      />

      <div class="container">
        <!-- Single Cinematic Image Layer -->
        <div class="reality-stack">
          <div class="image">
            <BaseImage
              image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
              alt="Sanctuary Campus"
            />
          </div>

          <!-- Floating Legend (Static) -->
          <div class="blueprint-legend">
            <div class="legend-header">
              <span class="code">PROJECT: LUXE-01</span>
              <span class="status">PHASE: REALIZED</span>
            </div>
            <SubTitle>The Sanctuary Campus</SubTitle>
            <BaseParagraph>
              A synthesis of biophilic architecture and sterile precision.
            </BaseParagraph>
          </div>
        </div>

        <div class="mt-5">
          <div class="medium-2 gap-2">
            <div class="text-block">
              <BaseTitle>Vision Realized.</BaseTitle>
              <BaseParagraph>
                We believe that healing begins with the environment. Our campus
                is designed to reduce patient stress through natural fractals
                and light optimization.
              </BaseParagraph>
              <BaseParagraph>
                This approach has resulted in a 30% reduction in patient anxiety
                and a 20% faster recovery time.
              </BaseParagraph>
            </div>
            <div class="medium-2 gap-1">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="blueprint-stat"
              >
                <BaseTitle>{{ stat.value }}</BaseTitle>
                <BaseParagraph>{{ stat.label }}</BaseParagraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blueprint-section {
  background: var(--surface-alt-color);
  overflow: hidden;
}

.reality-stack {
  position: relative;
  height: 70vh;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.1);
}

.image {
  width: 100%;
  height: 100%;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-block p {
  font-size: 1.25rem;
}
/* Floating Legend */
.blueprint-legend {
  position: absolute;
  bottom: 40px;
  left: 40px;
  background: var(--primary-color);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 24px;
  color: white;
  max-width: 400px;
  z-index: 10;
}

.legend-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  letter-spacing: 2px;
  margin-bottom: 15px;
  opacity: 0.7;
}

.blueprint-legend .sub-title {
  color: white;
  margin-bottom: 10px;
}

.blueprint-legend p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.blueprint-stat {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--border-color);
  color: var(--secondary-color);
  text-align: center;
}

.blueprint-stat p {
  font-size: 1.25rem;
  margin: 0;
}

@media (max-width: 991px) {
  .reality-stack {
    height: 60vh;
  }
  .blueprint-legend {
    left: 20px;
    right: 20px;
    bottom: 0.5rem;
    padding: 1rem;
  }
}
</style>
