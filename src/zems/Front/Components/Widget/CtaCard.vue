<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: "Click Here",
  },
});
</script>

<template>
  <div class="cta-card bg-primary">
    <SubTitle>{{ title }}</SubTitle>
    <BaseParagraph>
      {{ description }}
    </BaseParagraph>
    <BaseButton class="width-full">
      {{ buttonText }}
    </BaseButton>
  </div>
</template>

<style scoped>
.cta-card {
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  color: var(--white-color);
}
.cta-card .btn {
  background: var(--white-color);
  border-radius: 0.75rem;
  margin-bottom: 0;
}
</style>
