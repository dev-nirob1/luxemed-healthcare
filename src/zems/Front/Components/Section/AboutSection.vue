<script setup lang="ts">
import SectionTitle from "../Widget/SectionTitle.vue";
</script>

<template>
  <section class="about-section">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="image">
          <img
            class="img1"
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop"
            alt=""
          /><img
            class="img2"
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
            alt=""
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
  <!-- <section id="about" class="about-split">
    <div class="about-image-stack">
      <img
        src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop"
        class="about-img-1"
      />
      <img
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
        class="about-img-2"
      />
    </div>
    <div class="about-text">
      <span class="section-label">""</span>
      <h3>Architecture of Healing</h3>
      <p>
        LuxeMed isn't just a hospital; it's a testament to human ingenuity.
        Designed by biophilic architects, our facility promotes healing through
        connection with nature, light, and space.
      </p>
      <p>
        Our team of global experts collaborates using a unified digital cloud,
        ensuring that your health data travels with you, securely and instantly.
      </p>
      <ul style="margin-top: 30px">
        <li style="margin-bottom: 15px">
          <i
            class="fas fa-check-circle"
            style="color: var(--color-secondary); margin-right: 10px"
          ></i>
          100+ Sustainable Energey powered
        </li>
        <li style="margin-bottom: 15px">
          <i
            class="fas fa-check-circle"
            style="color: var(--color-secondary); margin-right: 10px"
          ></i>
          Paperless Digital Workflows
        </li>
        <li style="margin-bottom: 15px">
          <i
            class="fas fa-check-circle"
            style="color: var(--color-secondary); margin-right: 10px"
          ></i>
          Global Tele-Health Network
        </li>
      </ul>
    </div>
  </section> -->
</template>
<style scoped>
.about-section {
  padding: 4.75rem 0;
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
/* About (Asymetric) */
/* .about-split {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 80px;
  align-items: center;
  padding: var(--section-spacing) var(--container-padding);
}

.about-text h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--color-secondary);
}

.about-text p {
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.about-image-stack {
  position: relative;
  height: 600px;
}

.about-img-1 {
  width: 80%;
  height: 500px;
  object-fit: cover;
  border-radius: var(--card-radius);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.about-img-2 {
  width: 60%;
  height: 350px;
  object-fit: cover;
  border-radius: var(--card-radius);
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  border: 8px solid var(--color-background);
  box-shadow: var(--shadow-lg);
}
@media (max-width: 1024px) {
  .about-split {
    gap: 50px;
    padding: 100px var(--container-padding);
  }

  .about-text h3 {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .about-split {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 80px var(--container-padding);
  }

  .about-image-stack {
    height: 450px;
    margin-bottom: 20px;
  }

  .about-img-1 {
    width: 90%;
    height: 380px;
  }

  .about-img-2 {
    width: 70%;
    height: 280px;
  }

  .about-text h3 {
    font-size: 1.75rem;
  }
} */
</style>
