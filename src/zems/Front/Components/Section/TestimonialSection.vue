<script setup>
import { ref } from "vue";
import SectionTitle from "../Widget/SectionTitle.vue";
import TestimonialCard from "../Widget/TestimonialCard.vue";

const testimonials = ref([
  {
    id: 1,
    name: "Robert Fox",
    tag: "Cardiology Patient",
    quote:
      "The robotic heart surgery was flawless. I was back on my feet in days, not weeks. LuxeMed truly feels like the future of healthcare.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    tag: "Mother of 2",
    quote:
      "The pediatric ward is magical. My daughter wasn't scared for a second. The staff treated us like family, not just numbers.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Guy Hawkins",
    tag: "Neurology Patient",
    quote:
      "I've never experienced such thorough diagnostics. The AI analysis caught something early that others missed. Literally a life saver.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1976&auto=format&fit=crop",
  },
]);
</script>

<template>
  <section class="testimonials-section py-5 bg-light">
    <div class="container">
      <div class="section-header mb-3">
        <SectionTitle subTitle="Patient Stories" title="Voices of Recovery" />
      </div>

      <div class="medium-2 large-3 gap-2">
        <TestimonialCard
          v-for="item in testimonials"
          :key="item.id"
          :testimonial="item"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  position: relative;
  overflow: hidden;
}
/* No extra card styles needed here! TestimonialCard handles it. */
</style>
