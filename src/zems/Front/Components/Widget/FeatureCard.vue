<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="feature-card">
    <div class="icon">
      <i :class="[icon, 'feature-icon']"></i>
    </div>
    <div class="content-section">
      <SubTitle>{{ title }}</SubTitle>
      <BaseParagraph>
        {{ description }}
      </BaseParagraph>
    </div>
  </div>
</template>

<style scoped>
.feature-card {
  background: var(--surface-alt-color);
  padding: 30px;
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: var(--white-color);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
}

.icon {
  margin-bottom: 1.5rem;
}

.feature-icon {
  font-size: 2rem;
  color: var(--color-primary);
}
</style>
