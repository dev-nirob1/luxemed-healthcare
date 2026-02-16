<script setup>
defineProps({
  speciality: Object,
});
</script>
<template>
  <div class="services-card relative">
    <div class="image">
      <BaseImage :image="speciality.image" />
    </div>
    <div class="card-content">
      <SubTitle>{{ speciality.title }}</SubTitle>
      <BaseParagraph>{{ speciality.description }}</BaseParagraph>
      <RouterLink :to="`/speciality/${speciality.title}`"
        >Learn More <i class="fa fa-arrow-right"></i
      ></RouterLink>
    </div>
  </div>
</template>
<style scoped>
.services-card {
  overflow: hidden;
  border-radius: 1rem;
  color: var(--white-color);
}

.services-section .services-card .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease-in-out;
  opacity: 0.6;
}
.card-content {
  padding: 1.5rem 1rem;
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.8)
  );
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.card-content p {
  /* color: var(--white-color); */
  font-size: 1.1rem;
}
.services-card:hover img {
  transform: scale(1.1);
}
.services-card:hover a i {
  padding-left: 0.5rem;
  transition: all 0.5s ease-in-out;
}
@media (min-width: 768px) {
  .services-card:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
  }
  .services-card:nth-child(4) {
    grid-column: span 2;
  }
}
</style>
