<script setup>
import { ref } from "vue";
import SectionTitle from "../Widget/SectionTitle.vue";

const history = [
  {
    year: "2018",
    title: "Zurich Clinic",
    text: "Legacy begins in Switzerland.",
  },
  {
    year: "2021",
    title: "AI Heart Surgery",
    text: "Robotic precision redefined.",
  },
  { year: "2024", title: "Global Network", text: "Expansion to 3 continents." },
  {
    year: "2026",
    title: "Eco Sanctuary",
    text: "Next-gen carbon negative care.",
  },
  {
    year: "Future",
    title: "Infinite Care",
    text: "The next frontier of wellness.",
  },
];

const scrollContainer = ref(null);

const scroll = (direction) => {
  if (scrollContainer.value) {
    const scrollAmount = 400;
    scrollContainer.value.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <section class="history-slider py-5">
    <div class="container">
      <div class="header-with-nav mb-5">
        <SectionTitle
          subTitle="Design Option 3"
          title="Interactive Navigation"
        />
        <div class="nav-controls">
          <button @click="scroll('prev')" class="nav-btn">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button @click="scroll('next')" class="nav-btn">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div class="slider-wrapper">
        <div ref="scrollContainer" class="scroll-area">
          <div v-for="item in history" :key="item.year" class="history-slide">
            <div class="slide-card">
              <BaseTitle class="year-pin">{{ item.year }}</BaseTitle>
              <div class="slide-content">
                <BaseTitle class="slide-title">{{ item.title }}</BaseTitle>
                <BaseParagraph>{{ item.text }}</BaseParagraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history-slider {
  background: white;
  padding: 100px 0;
}

.header-with-nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.nav-controls {
  display: flex;
  gap: 15px;
}

.nav-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background: white;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.slider-wrapper {
  position: relative;
  margin-top: 3rem;
}

.scroll-area {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding: 20px 0 60px;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}

.scroll-area::-webkit-scrollbar {
  display: none;
}

.history-slide {
  min-width: 400px;
  flex: 0 0 400px;
  scroll-snap-align: start;
}

.slide-card {
  background: var(--surface-alt-color);
  padding: 40px;
  border-radius: 2rem;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid transparent;
  transition: all 0.4s ease;
}

.slide-card:hover {
  background: white;
  border-color: var(--border-color);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.05);
}

.year-pin {
  font-size: 1.1rem;
  color: var(--primary-color);
  opacity: 0.6;
}

.slide-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .history-slide {
    min-width: 300px;
    flex: 0 0 300px;
  }
}
</style>
