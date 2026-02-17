<script setup>
import SectionTitle from "../Widget/SectionTitle.vue";
</script>

<template>
  <section class="about-section">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="image">
          <img
            class="img1"
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
            alt="LuxeMed Architecture"
          /><img
            class="img2"
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
            alt="Robotic Surgery Facility"
          />
        </div>
        <div class="content">
          <SectionTitle title="Architecture of Healing" subTitle="Who We Are" />
          <BaseParagraph>
            LuxeMed isn't just a hospital; it's a testament to human ingenuity.
            Designed by biophilic architects, our facility promotes healing
            through connection with nature, light, and space.
          </BaseParagraph>
          <BaseParagraph>
            Our team of global experts collaborates using a unified digital
            cloud, ensuring that your health data travels with you, securely and
            instantly.
          </BaseParagraph>
          <ul class="features">
            <ListItem>100+ Sustainable Energy powered</ListItem>
            <ListItem>Paperless Digital Workflows</ListItem>
            <ListItem>Global Tele-Health Network</ListItem>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about-section {
  padding: 5rem 0 7rem 0;
}
.about-section .content p {
  font-size: 1.15rem;
}
.about-section .image {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.image .img1,
.image .img2 {
  border-radius: 1rem;
}
.about-section .image .img1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.about-section .image .img2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: static;
  right: 0;
  border: 5px solid var(--white-color);
  top: 50%;
}

@media (min-width: 768px) {
  .about-section .image .img1 {
    width: 90%;
  }
  .about-section .image .img2 {
    width: 260px;
    height: 260px;
    position: absolute;
  }
}
</style>
