<script setup>
import { onMounted, ref } from "vue";

const heroContent = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  if (heroContent.value) {
    observer.observe(heroContent.value);
  }
});
</script>

<template>
  <header id="home" class="hero">
    <div ref="heroContent" class="hero-content reveal">
      <span class="badge">Welcome to 2026</span>
      <h1>
        Healthcare Reimagined <br />
        For <span style="font-style: italic">Humanity.</span>
      </h1>
      <p class="hero-subtext">
        A sanctuary of healing where artificial intelligence meets human
        compassion. Experience the next generation of medical excellence.
      </p>
      <div class="hero-buttons">
        <button class="btn btn-primary">Start Your Journey</button>
        <button class="btn btn-secondary">
          <i class="fas fa-play-circle" style="margin-right: 8px"></i> Virtual
          Tour
        </button>
      </div>
    </div>
  </header>
</template>
<style scoped>
.hero {
  padding: 180px var(--container-padding) 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 90vh;
  position: relative;
  overflow: hidden;
  background-image: url("https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"); /* Reverted to previous image */
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; removed to prevent scroll lag */
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(10, 61, 50, 0.7) 0%,
    rgba(10, 61, 50, 0.45) 100%
  );
  z-index: 1;
  backdrop-filter: blur(0px); /* Removed blur for clarity */
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  color: white;
}

.hero-content h1 {
  font-size: var(--font-size-h1);
  margin-bottom: 30px;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.hero-content span {
  background: linear-gradient(135deg, #ffffff, #d4e09b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.hero-subtext {
  font-size: 1.35rem;
  margin-bottom: 50px;
  color: rgba(255, 255, 255, 0.9); /* Lighter subtext */
  font-weight: 300;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hero-buttons {
  display: flex;
  gap: 24px;
  justify-content: center;
}

/* Updated Button Styles for Dark Background */
.hero .btn-secondary {
  border-color: rgba(255, 255, 255, 0.4);
  color: white;
}

.hero .btn-secondary:hover {
  background: white;
  color: var(--color-primary);
  border-color: white;
}
</style>
