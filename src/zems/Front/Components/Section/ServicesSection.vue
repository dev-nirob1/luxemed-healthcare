<script setup>
import { RouterLink } from "vue-router";
import SectionTitle from "../Widget/SectionTitle.vue";
import { ref } from "vue";
import ServicesCard from "../Widget/ServicesCard.vue";
const specialities = ref([
  {
    id: 1,
    title: "Cardiology",
    description:
      "Advanced heart care using robotic-assisted precision and AI diagnostics.",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Neurology",
    description:
      "Next-gen brain mapping and neural rehabilitation for complex conditions.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Pediatrics",
    description:
      "Compassionate care for children in a modern, healing environment.",
    image:
      "https://images.unsplash.com/photo-1632053001332-2268cc09f738?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Diagnostics",
    description:
      "Personalized medicine powered by unique genomic and DNA profiling.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2074&auto=format&fit=crop",
  },
]);
</script>

<template>
  <section class="services-section">
    <div class="container">
      <div class="flex justify-between align-center gap-1 mb-3">
        <SectionTitle
          subTitle="Our Specialties"
          title="Holistic Care Ecosystem"
        />
        <RouterLink class="title-action" to="/specialities"
          >View All Department</RouterLink
        >
      </div>
      <div class="medium-4 gap-2">
        <ServicesCard
          v-for="speciality in specialities"
          :key="speciality.id"
          :speciality="speciality"
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
.services-section {
  padding: 3.75rem 0;
}
.title-action {
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
}

@media (min-width: 768px) {
  .medium-4 {
    grid-auto-rows: 280px;
  }
}
</style>
