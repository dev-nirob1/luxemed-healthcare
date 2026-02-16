<template>
  <!-- 1️⃣ Top Info Bar -->
  <div class="bg-primary">
    <div class="container top-bar">
      <BaseParagraph>
        <i class="fas fa-heartbeat"></i>
        Leading the future of personalized medicine
      </BaseParagraph>
      <BaseParagraph class="flex gap-1">
        <span><i class="fas fa-phone-alt"></i> +880 1234 567 890</span>
        <span><i class="fas fa-map-marker-alt"></i> New York, USA</span>
      </BaseParagraph>
    </div>
  </div>
</template>
<style scoped>
.top-bar {
  color: var(--white-color);
  font-size: 0.9rem;
  display: none;
  justify-content: space-between;
  align-items: center;
}
.top-bar i {
  color: var(--accent-color);
}
@media (min-width: 768px) {
  .top-bar {
    display: flex;
  }
}
</style>
