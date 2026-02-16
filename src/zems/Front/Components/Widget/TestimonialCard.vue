<script setup>
defineProps({
  testimonial: Object,
});
</script>

<template>
  <div class="testimonial-card">
    <div class="stars">
      <i v-for="i in 5" :key="i" class="fas fa-star"></i>
    </div>
    <BaseParagraph class="quote italic">
      "{{ testimonial.quote }}"
    </BaseParagraph>
    <div class="patient-info flex align-center gap-1">
      <div class="avatar">
        <img :src="testimonial.avatar" :alt="testimonial.name" />
      </div>
      <div class="meta">
        <h5 class="name">{{ testimonial.name }}</h5>
        <span class="tag">{{ testimonial.tag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-card {
  background: var(--white-color);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}
.testimonial-card:hover {
  transform: translateY(-5px);
}
.stars {
  color: #ffb400;
  font-size: 0.85rem;
}
.quote {
  font-size: 1.15rem;
  color: var(--text-main-color);
  opacity: 0.8;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--secondary-color);
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.name {
  margin: 0;
  color: var(--primary-color);
  font-weight: 700;
}
.tag {
  font-size: 0.85rem;
  opacity: 0.6;
}
</style>
