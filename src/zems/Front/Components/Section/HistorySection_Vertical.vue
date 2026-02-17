<script setup>
import SectionTitle from "../Widget/SectionTitle.vue";

const history = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Dr. Weiss opens the first boutique clinic in Zurich, establishing a new standard for luxury medical care.",
  },
  {
    year: "2021",
    title: "Robotic First",
    description:
      "LuxeMed performs the first fully autonomous AI-assisted heart surgery, revolutionizing precision medicine.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Expansion into major global hubs including Tokyo, New York, and London, bringing elite healthcare to the world.",
  },
  {
    year: "2026",
    title: "The Eco-Campus",
    description:
      "Completion of our carbon-negative sanctuary hospital, a model for the future of sustainable healing.",
  },
];
</script>

<template>
  <section class="history-vertical py-5">
    <div class="container">
      <SectionTitle
        subTitle="Legacy of Innovation"
        title="Our Journey Through Time"
        class="mb-5"
      />

      <div class="vertical-timeline">
        <div
          v-for="(item, index) in history"
          :key="item.year"
          class="timeline-row"
          :class="{ 'row-reverse': index % 2 !== 0 }"
        >
          <!-- Year Pillar -->
          <div class="year-pillar">
            <BaseTitle class="year-display">{{ item.year }}</BaseTitle>
            <div class="dot-marker"></div>
          </div>

          <!-- Content Card -->
          <div class="content-card">
            <BaseTitle class="item-title">{{ item.title }}</BaseTitle>
            <BaseParagraph>{{ item.description }}</BaseParagraph>
          </div>
        </div>

        <!-- Center Connecting Line -->
        <div class="center-line"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history-vertical {
  background: var(--surface-color);
  padding: 100px 0;
  border-bottom: 2px dashed var(--border-color);
}

.vertical-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.center-line {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: var(--border-color);
  z-index: 1;
}

.timeline-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.timeline-row.row-reverse {
  direction: rtl;
}

.timeline-row.row-reverse .content-card {
  direction: ltr; /* Reset text direction inside card */
  text-align: right;
}

.year-pillar {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;
}

.row-reverse .year-pillar {
  align-items: flex-start;
}

.year-display {
  font-size: 5rem;
  line-height: 1;
  color: var(--primary-color);
  opacity: 0.15;
  transition: opacity 0.3s ease;
}

.dot-marker {
  position: absolute;
  right: -58px; /* Offset to hit center line */
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: var(--white-color);
  border: 4px solid var(--primary-color);
  border-radius: 50%;
}

.row-reverse .dot-marker {
  left: -58px;
  right: auto;
}

.content-card {
  background: var(--white-color);
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-color);
}

.item-title {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

@media (max-width: 991px) {
  .center-line {
    left: 20px;
  }
  .timeline-row {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-left: 50px;
    padding-right: 10px;
  }
  .timeline-row.row-reverse {
    direction: ltr;
  }
  .timeline-row.row-reverse .content-card {
    text-align: left;
  }
  .year-pillar {
    align-items: flex-start;
  }
  .dot-marker {
    left: -38px !important;
    right: auto !important;
  }
  .year-display {
    font-size: 2.5rem;
  }
  .content-card {
    padding: 1.5rem;
  }
  .item-title {
    font-size: 1.5rem;
  }
}
</style>
