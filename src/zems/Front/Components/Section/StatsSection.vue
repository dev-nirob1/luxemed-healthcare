<template>
  <section class="stats-section bg-primary">
    <ul class="container medium-2 large-4 gap-2">
      <ListItem>
        <BaseTitle>99%</BaseTitle>
        <BaseParagraph>Patient Satisfaction</BaseParagraph>
      </ListItem>
      <ListItem>
        <BaseTitle>15m</BaseTitle>
        <BaseParagraph>Wait Time (Avg)</BaseParagraph>
      </ListItem>
      <ListItem>
        <BaseTitle>24/7</BaseTitle>
        <BaseParagraph>AI Monitoring</BaseParagraph>
      </ListItem>
      <ListItem>
        <BaseTitle>50+</BaseTitle>
        <BaseParagraph>Specialists</BaseParagraph>
      </ListItem>
    </ul>
  </section>
</template>
<style scoped>
.stats-section {
  padding: 3.75rem 0;
}
.stats-section ul li {
  text-align: center;
  color: var(--white-color);
}
.stats-section ul li .title {
  color: var(--accent-color);
}
.stats-section ul li p {
  font-size: 1.25rem;
}
</style>
