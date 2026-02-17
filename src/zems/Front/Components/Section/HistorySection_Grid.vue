<script setup>
import SectionTitle from "../Widget/SectionTitle.vue";

const history = [
  {
    year: "2018",
    title: "Founding",
    description: "The first architectural sanctuary opens in Zurich.",
    span: "col-span-2",
  },
  {
    year: "2021",
    title: "AI Milestone",
    description: "Autonomous heart surgery perfected.",
    span: "col-span-1",
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Presence established in London & Tokyo.",
    span: "col-span-1",
  },
  {
    year: "2026",
    title: "Future Now",
    description: "Introduction of the carbon-negative Eco-Campus model.",
    span: "col-span-2",
  },
];
</script>

<template>
  <section class="history-grid py-5">
    <div class="container">
      <SectionTitle
        subTitle="Design Option 2"
        title="Cinematic Milestone Grid"
        class="mb-5"
      />

      <div class="bento-grid">
        <div
          v-for="item in history"
          :key="item.year"
          class="grid-card"
          :class="item.span"
        >
          <div class="card-inner">
            <BaseTitle class="year-label">{{ item.year }}</BaseTitle>
            <div class="content">
              <BaseTitle class="card-title">{{ item.title }}</BaseTitle>
              <BaseParagraph>{{ item.description }}</BaseParagraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history-grid {
  background: var(--surface-alt-color);
  padding: 100px 0;
  border-bottom: 2px dashed var(--border-color);
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.grid-card {
  background: var(--white-color);
  padding: 3rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border-color);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 350px;
  position: relative;
  overflow: hidden;
}

.grid-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary-color);
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.05);
}

.col-span-2 {
  grid-column: span 2;
}

.col-span-1 {
  grid-column: span 1;
}

.year-label {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 6rem;
  line-height: 0.8;
  opacity: 0.05;
  color: var(--primary-color);
  transition: opacity 0.3s ease;
}

.grid-card:hover .year-label {
  opacity: 0.1;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

@media (max-width: 991px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .col-span-2,
  .col-span-1 {
    grid-column: span 1;
  }
  .grid-card {
    min-height: 250px;
  }
}
</style>
