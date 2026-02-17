<script setup>
defineProps({
  doctor: Object,
});
</script>

<template>
  <div class="doc-card">
    <div class="image">
      <img :src="doctor.image" :alt="doctor.name" />
      <div class="social-overlay">
        <i class="fab fa-linkedin"></i>
        <i class="fas fa-envelope"></i>
        <i class="fas fa-phone"></i>
      </div>
    </div>
    <div class="card-content">
      <span class="doc-dept">{{ doctor.dept }}</span>
      <SubTitle>{{ doctor.name }}</SubTitle>
      <BaseParagraph>{{ doctor.qual }}</BaseParagraph>
      <RouterLink to="/appointment" class="btn book-btn width-full"
        >Book Appointment</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.doc-card {
  background: var(--white-color);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease-in-out;
}

.doc-card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
}

.image {
  height: 280px;
  position: relative;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.7s ease-in-out;
}

.doc-card:hover .image img {
  transform: scale(1.08);
}

.social-overlay {
  position: absolute;
  bottom: -57px;
  left: 0;
  width: 100%;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  gap: 20px;
  transition: 0.4s ease;
}

.doc-card:hover .social-overlay {
  bottom: 0;
}

.social-overlay i {
  color: var(--primary-color);
  cursor: pointer;
  transition: 0.2s;
  font-size: 1.1rem;
}

.social-overlay i:hover {
  color: var(--secondary-color);
  transform: scale(1.2);
}

.card-content {
  padding: 1.5rem;
  text-align: center;
}

.doc-dept {
  color: var(--secondary-color);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  margin-bottom: 0.75rem;
  display: block;
}

.card-content .sub-title {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.card-content p {
  font-size: 0.9rem;
  color: var(--text-muted-color);
  margin-bottom: 1.5rem;
}

.book-btn {
  border: 1px solid var(--border-color);
  transition: 0.3s;
}

.book-btn:hover {
  background: var(--primary-color);
  color: var(--white-color);
  border-color: var(--primary-color);
}
</style>
