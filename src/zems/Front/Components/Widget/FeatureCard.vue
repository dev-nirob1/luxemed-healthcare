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
    <div class="icon-section">
      <i :class="[icon, 'feature-icon']"></i>
    </div>
    <div class="content-section">
      <h4 class="feature-title">{{ title }}</h4>
      <BaseParagraph class="feature-description">
        {{ description }}
      </BaseParagraph>
    </div>
  </div>
</template>

<style scoped>
.feature-card {
  background: #f0f4f2;
  padding: 30px;
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: white;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
}

.icon-section {
  margin-bottom: 1.5rem;
}

.feature-icon {
  font-size: 2rem;
  color: var(--color-primary);
}

.feature-title {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--color-text);
  font-weight: 700;
}

.feature-description {
  font-size: 1rem;
  margin-bottom: 0;
  line-height: 1.6;
}
</style>
