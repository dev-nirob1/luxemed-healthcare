<script setup>
import SectionTitle from "../Widget/SectionTitle.vue";

// No script logic needed
</script>

<template>
  <section class="ceo-section py-5">
    <div class="container medium-2 gap-2">
      <!-- Founder Image -->
      <div class="image">
        <BaseImage
          image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
          alt="Dr. Adrian Weiss"
        />
      </div>

      <!-- Content Area -->
      <div class="content">
        <SectionTitle
          subTitle="From the Founder"
          title="Building a Sanctuary."
          class="mb-3"
        />

        <div class="quote-block">
          <BaseParagraph class="quote-text">
            "We didn't set out to build a hospital. We set out to build a place
            where people actually want to go."
          </BaseParagraph>
          <BaseParagraph class="main-body">
            When I founded LuxeMed in 2018, I saw a gap in the market. Hospitals
            were sterile, frightening places. I wanted to create an environment
            that felt more like a wellness retreat—where the technology is
            invisible, but the care is omnipresent.
          </BaseParagraph>
        </div>

        <div class="ceo-signature">
          <div class="ceo-meta">
            <BaseTitle>Dr. Adrian Weiss</BaseTitle>
            <BaseParagraph>Founder & CEO</BaseParagraph>
          </div>
          <div class="signature">Adrian Weiss</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ceo-section {
  background: var(--surface-color);
}

.image {
  max-height: 500px;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.05);
}

.image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.quote-text {
  font-size: 1.5rem;
  font-family: serif;
  font-style: italic;
  color: var(--primary-color);
  margin-bottom: 2rem;
  line-height: 1.4;
  position: relative;
}

.main-body {
  font-size: 1.25rem;
  color: var(--text-muted-color);
}

/* Footer & Signature */
.ceo-signature {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.ceo-meta p {
  color: var(--text-muted-color);
  margin: 0;
  font-size: 1.1rem;
}

.signature {
  font-family: "Brush Script MT", cursive;
  font-size: 3rem;
  opacity: 0.4;
  color: var(--primary-color);
  user-select: none;
}
</style>
