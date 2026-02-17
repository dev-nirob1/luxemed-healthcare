<script setup>
import SectionTitle from "../Widget/SectionTitle.vue";

const facilities = [
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    title: "Smart Suites",
    text: "Private patient rooms with voice-controlled ambience and biometric security.",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2022/09/15/01/05/cataract-rupture-7455449_1280.jpg",
    title: "Robotic ORs",
    text: "Ultra-precision surgery suites equipped with Da Vinci Xi and Zeiss Kinevo systems.",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2018/01/22/11/02/hospital-3098683_1280.jpg",
    title: "Diagnostic Hub",
    text: "Advanced pathology and imaging labs delivering precise results in under 60 minutes.",
  },
];
</script>

<template>
  <section class="facilities-section py-5">
    <div class="container">
      <!-- Section Header -->
      <SectionTitle
        subTitle="Our Infrastructure"
        title="World-Class Facilities"
        class="text-center mb-3"
      />

      <!-- Facilities Grid -->
      <div class="facilities-container medium-2 large-3 gap-2 mt-5">
        <div v-for="item in facilities" :key="item.title" class="facility-card">
          <div class="image">
            <BaseImage :image="item.image" :alt="item.title" />
          </div>
          <div class="card-content">
            <BaseTitle class="facility-title">{{ item.title }}</BaseTitle>
            <BaseParagraph>{{ item.text }}</BaseParagraph>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.facility-card {
  position: relative;
  background: var(--white-color);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.4s ease-in-out;
}

.image {
  height: 260px;
  width: 100%;
  overflow: hidden;
}

.image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.facility-card:hover .image img {
  transform: scale(1.1);
}

.card-content {
  padding: 1.5rem;
}

.facility-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
}

.facility-card p {
  font-size: 1.1rem;
  color: var(--text-muted-color);
  line-height: 1.6;
  margin: 0;
}
</style>
