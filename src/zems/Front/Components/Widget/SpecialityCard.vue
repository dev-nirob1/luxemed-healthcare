<script setup>
defineProps({
  speciality: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="service-card">
    <div class="image">
      <img :src="speciality.image" :alt="speciality.title" />
    </div>
    <div class="card-content">
      <div class="icon-box"><i :class="speciality.icon"></i></div>
      <SubTitle>{{ speciality.title }}</SubTitle>
      <BaseParagraph>{{ speciality.text }}</BaseParagraph>
      <RouterLink :to="speciality.link" class="details-btn">
        View Details <i class="fas fa-arrow-right"></i>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  background: var(--white-color);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
  transition: 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  border-color: var(--border-color);
}

.image {
  height: 240px;
  overflow: hidden;
  position: relative;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease-in-out;
}

.service-card:hover .image img {
  transform: scale(1.08);
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.icon-box {
  width: 60px;
  height: 60px;
  background: var(--surface-alt-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--primary-color);
  transition: 0.3s;
}

.service-card:hover .icon-box {
  background: var(--primary-color);
  color: var(--white-color);
}

.card-content .sub-title {
  color: var(--primary-color);
}

.card-content p {
  color: var(--text-muted-color);
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}

.details-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  color: var(--primary-color);
  text-decoration: none;
  transition: 0.3s;
}

.details-btn:hover {
  color: var(--secondary-color);
  gap: 15px;
}
</style>
