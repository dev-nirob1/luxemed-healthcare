<script setup>
import { ref, computed } from "vue";
import SectionTitle from "../Components/Widget/SectionTitle.vue";
import DoctorCard from "../Components/Widget/DoctorCard.vue";
import FilterBar from "../Components/Widget/FilterBar.vue";

const categories = [
  "All Specialists",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Surgery",
];
const activeCategory = ref("All Specialists");

const doctors = [
  {
    name: "Dr. Sarah Jenkins",
    dept: "Cardiology",
    qual: "MD, PhD (Harvard)",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Dr. Alexander Ray",
    dept: "Neurology",
    qual: "MD, FACS (Johns Hopkins)",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
  },
  {
    name: "Dr. Emily Chen",
    dept: "Pediatrics",
    qual: "MD (Stanford)",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Dr. Marcus Webb",
    dept: "General Surgery",
    qual: "MD, FRCS (Oxford)",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Dr. Lisa Wong",
    dept: "Cardiology",
    qual: "MD (Yale)",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Dr. James Carter",
    dept: "Neurology",
    qual: "MD (Cambridge)",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
  },
];

const filteredDoctors = computed(() => {
  if (activeCategory.value === "All Specialists") return doctors;
  return doctors.filter(
    (doc) =>
      doc.dept === activeCategory.value ||
      (doc.dept === "General Surgery" && activeCategory.value === "Surgery"),
  );
});
</script>

<template>
  <header class="team-hero py-5">
    <div class="container text-center">
      <SectionTitle subTitle="Specialists" title="Review The Best" />
      <BaseParagraph>
        Our board-certified specialists are leaders in their fields, dedicated
        to providing compassionate, cutting-edge care.
      </BaseParagraph>
    </div>
  </header>

  <div class="container pb-5">
    <FilterBar v-model="activeCategory" :categories="categories" class="mb-4" />

    <section class="medium-2 large-3 gap-2">
      <DoctorCard
        v-for="doc in filteredDoctors"
        :key="doc.name"
        :doctor="doc"
      />
    </section>
  </div>
</template>

<style scoped>
/* Filter Bar */
.filter-bar {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
