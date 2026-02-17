Diagnostics Suite
<script setup>
import { ref } from "vue";
import SectionTitle from "../Widget/SectionTitle.vue";

const galleryItems = [
  {
    url: "https://cdn.pixabay.com/photo/2015/11/18/17/24/surgery-1049588_1280.jpg",
    title: "Surgical Precision",
  },
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    title: "Diagnostics Suite",
  },
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop",
    title: "The Lounge",
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/09/02/16/17/dentist-1639683_1280.jpg",
    title: "Patient Serenity",
  },
  {
    url: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2000&auto=format&fit=crop",
    title: "Wellness Hall",
  },
  {
    url: "https://images.pexels.com/photos/6129149/pexels-photo-6129149.jpeg",
    title: "Technology Integrated",
  },
];
</script>

<template>
  <section class="gallery-section py-5">
    <div class="container text-center mb-4">
      <SectionTitle
        subTitle="Visual Journey"
        title="Architecture of Wellness"
      />
    </div>

    <!-- Luxe Marquee -->
    <div class="luxe-marquee-container">
      <div class="luxe-marquee-track">
        <!-- Original Set -->
        <div
          v-for="(item, index) in galleryItems"
          :key="'orig-' + index"
          class="marquee-item"
        >
          <img :src="item.url" :alt="item.title" loading="lazy" />
          <div class="marquee-overlay">
            <span class="marquee-title">{{ item.title }}</span>
          </div>
        </div>
        <!-- Duplicate Set for Seamless Loop -->
        <div
          v-for="(item, index) in galleryItems"
          :key="'dup-' + index"
          class="marquee-item"
        >
          <img :src="item.url" :alt="item.title" loading="lazy" />
          <div class="marquee-overlay">
            <span class="marquee-title">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  background: var(--color-background);
  overflow: hidden;
}

.luxe-marquee-container {
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
}

.luxe-marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}

.luxe-marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-item {
  flex: 0 0 400px;
  height: 300px;
  margin-right: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
}

.marquee-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
}

.marquee-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.marquee-item:hover .marquee-overlay {
  opacity: 1;
}

.marquee-item:hover img {
  transform: scale(1.1);
}

.marquee-title {
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  transform: translateY(10px);
  transition: transform 0.4s ease;
}

.marquee-item:hover .marquee-title {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .marquee-item {
    flex: 0 0 300px;
    height: 220px;
  }
  .luxe-marquee-track {
    animation-duration: 25s;
  }
}
</style>
