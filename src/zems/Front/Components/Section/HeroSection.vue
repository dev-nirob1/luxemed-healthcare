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
  <section class="hero flex-center">
    <div class="content">
      <span class="badge">Welcome to LuxeMed.</span>
      <HeroTitle>
        Healthcare Reimagined <br />
        For <span class="highlight">Humanity.</span>
      </HeroTitle>
      <BaseParagraph>
        A sanctuary of healing where artificial intelligence meets human
        compassion. Experience the next generation of medical excellence.
      </BaseParagraph>
      <div class="flex justify-center align-center flex-wrap gap-1">
        <BaseButton class="bg-primary">Start Your Journey</BaseButton>
        <BaseButton class="outline"
          ><i class="fas fa-play-circle"></i> Virtual Tour</BaseButton
        >
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero {
  min-height: 100vh;
  width: 100%;
  padding: 0 1rem;
  background:
    linear-gradient(
      to bottom,
      rgba(10, 61, 50, 0.5) 0%,
      rgba(10, 61, 50, 0.3) 100%
    ),
    url("https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop")
      center / cover no-repeat;
}
.hero .content {
  max-width: 800px;
  text-align: center;
  color: var(--white-color);
  font-size: 1.25rem;
}
.hero .content p {
  font-size: 1.25rem;
}
.hero .badge {
  background: linear-gradient(135deg, #ffffff, #d4e09b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

.hero .btn.bg-primary {
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1.1rem 2rem;
}
.hero .btn.outline {
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1.1rem 2rem;
  border: 1px solid var(--white-color);
  color: var(--white-color);
  padding: 1.1rem 2rem;
}
.hero .highlight {
  background: linear-gradient(135deg, var(--white-color), var(--accent-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
