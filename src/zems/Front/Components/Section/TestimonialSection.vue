<script setup>
import { ref, onMounted } from "vue";
import SectionTitle from "../Widget/SectionTitle.vue";
import TestimonialCard from "../Widget/TestimonialCard.vue";
import { createSlider } from "../../../../plugins/LuxeSlider/LuxeSlider.js";
import "../../../../plugins/LuxeSlider/LuxeSlider.css";

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

const trackRef = ref(null);
let slider = null;

onMounted(() => {
  if (trackRef.value) {
    slider = createSlider(trackRef.value, 30); // 30px gap
  }
});

const next = () => slider?.next();
const prev = () => slider?.prev();
</script>

<template>
  <section class="testimonials-section py-5 bg-light">
    <div class="container">
      <div class="section-header flex justify-between align-end mb-3">
        <SectionTitle subTitle="Patient Stories" title="Voices of Recovery" />

        <div class="slider-controls flex gap-1">
          <button class="luxe-arrow" @click="prev">
            <i class="fa fa-arrow-left"></i>
          </button>
          <button class="luxe-arrow" @click="next">
            <i class="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div class="luxe-slider">
        <div class="luxe-slider-track" ref="trackRef">
          <TestimonialCard
            v-for="item in testimonials"
            :key="item.id"
            :testimonial="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  position: relative;
  overflow: hidden;
}
.luxe-slider {
  overflow: hidden;
  width: 100%;
}
.luxe-slider-track {
  display: flex;
  gap: 30px;
  transition: transform 0.5s ease;
}
.luxe-slider-track > * {
  flex: 0 0 calc(33.33% - 20px); /* Desktop 3 items */
}
@media (max-width: 992px) {
  .luxe-slider-track > * {
    flex: 0 0 calc(50% - 15px); /* Tablet 2 items */
  }
}
@media (max-width: 600px) {
  .luxe-slider-track > * {
    flex: 0 0 100%; /* Mobile 1 item */
  }
}

.luxe-arrow {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid var(--secondary-color);
  background: transparent;
  cursor: pointer;
  transition: 0.3s;
}
.luxe-arrow:hover {
  background: var(--secondary-color);
  color: white;
}
/* No extra card styles needed here! TestimonialCard handles it. */
</style>
