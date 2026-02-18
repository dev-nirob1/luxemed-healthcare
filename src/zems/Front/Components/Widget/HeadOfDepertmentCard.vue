<script setup>
defineProps({
  department: {
    type: String,
    default: "Department",
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  profileLink: {
    type: String,
    default: "#",
  },
});
</script>

<template>
  <div class="department-card">
    <SubTitle>Head of {{ department }}</SubTitle>

    <div class="doctor-info">
      <div class="image">
        <BaseImage :image="image" />
      </div>
      <div class="text-info">
        <div class="doctor-name">{{ name }}</div>
        <div class="doctor-role">{{ role }}</div>
      </div>
    </div>

    <BaseButton class="bg-primary width-full"> View Profile </BaseButton>
  </div>
</template>

<style scoped>
.department-card {
  background: var(--white-color);
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  border: 1px solid var(--border-color);
}
.department-card .btn {
  border-radius: 0.75rem;
}
.doctor-info {
  display: flex;
  gap: 15px;
  align-items: center;
  margin: 1.25rem 0;
}

.image {
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50%;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.doctor-name {
  font-weight: 700;
  color: var(--color-text);
}
</style>
