<script setup>
defineProps({
  subTitle: String,
  title: String,
});
</script>
<template>
  <div class="section-title">
    <span class="section-label">{{ subTitle }}</span>
    <BaseTitle>{{ title }}</BaseTitle>
  </div>
</template>
<style scoped>
.section-title {
  color: var(--secondary-color);
}
.section-title .section-label {
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: block;
}
</style>
