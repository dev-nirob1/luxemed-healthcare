<script setup lang="ts">
import SpecialityCard from "../Components/Widget/SpecialityCard.vue";

const specialities = [
  {
    title: "Robotic Cardiology",
    icon: "fas fa-heartbeat",
    text: "Minimally invasive heart surgery using the Da Vinci Xi system for faster recovery and better outcomes.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop",
    link: "speciality/2",
  },
  {
    title: "Cognitive Neurology",
    icon: "fas fa-brain",
    text: "Advanced brain mapping and AI-assisted diagnostics for complex neurological conditions.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2070&auto=format&fit=crop",
    link: "speciality/neurology",
  },
  {
    title: "Advanced Pediatrics",
    icon: "fas fa-child",
    text: "Comprehensive care for children in a warm, fear-free environment designed for comfort.",
    image:
      "https://images.unsplash.com/photo-1632053001332-2268cc09f738?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "speciality/pediatrics",
  },
  {
    title: "Genomic Diagnostics",
    icon: "fas fa-dna",
    text: "Personalized medicine based on your DNA profile to predict and prevent future illness.",
    image:
      "https://images.unsplash.com/photo-1582719298866-977ee81c87d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Bionic Orthopedics",
    icon: "fas fa-bone",
    text: "Joint replacement and rehabilitation using 3D-printed implants and robotic guidance.",
    image:
      "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Precision Oncology",
    icon: "fas fa-ribbon",
    text: "Targeted cancer therapies that attack tumors while preserving healthy tissue.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2074&auto=format&fit=crop",
    link: "#",
  },
];
</script>

<template>
  <section class="container medium-2 large-3 gap-2 py-5">
    <SpecialityCard
      v-for="item in specialities"
      :key="item.title"
      :speciality="item"
    />
  </section>
</template>

<style scoped></style>
