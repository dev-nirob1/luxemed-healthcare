<template>
  <!-- 3. Leadership Message -->
  <section class="ceo-section reveal-up">
    <div class="ceo-image-wrapper">
      <img
        src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
        style="width: 100%; display: block"
      />
    </div>
    <div>
      <span class="hero-tag">From the Founder</span>
      <p class="quote-large">
        "We didn't set out to build a hospital. We set out to build a place
        where people actually want to go."
      </p>
      <p
        style="
          font-size: 1.15rem;
          line-height: 1.9;
          color: #555;
          margin-bottom: 40px;
        "
      >
        When I founded LuxeMed in 2018, I saw a gap in the market. Hospitals
        were sterile, frightening places. I wanted to create an environment that
        felt more like a wellness retreat—where the technology is invisible, but
        the care is omnipresent.
      </p>
      <div style="display: flex; align-items: center; gap: 20px">
        <div>
          <h4 style="font-size: 1.3rem; font-weight: 700">Dr. Adrian Weiss</h4>
          <p style="color: #888">Founder & CEO</p>
        </div>
        <!-- Fake Signature -->
        <div
          style="
            font-family: &quot;Brush Script MT&quot;, cursive;
            font-size: 2rem;
            opacity: 0.4;
          "
        >
          Adrian Weiss
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* CEO Section */
.ceo-section {
  background: #fff;
  padding: 120px 6%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;
  position: relative;
}

.ceo-image-wrapper {
  height: 100%;
  position: relative;
}
.ceo-image-wrapper img {
  height: 100%;
  border-radius: 1rem;
  box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.05);
}
.ceo-image-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transform: translate(20px, 20px);
  z-index: -1;
}

.quote-large {
  font-size: 1.25rem;
  font-family: serif; /* Luxurious touch */
  font-style: italic;
  color: var(--color-primary);
  line-height: 1.2;
  margin: 2rem 0;
  position: relative;
}
.quote-large::before {
  content: "“";
  position: absolute;
  top: -40px;
  left: -20px;
  font-size: 8rem;
  color: rgba(212, 224, 155, 0.3);
  font-family: sans-serif;
  z-index: -1;
}
@media (max-width: 768px) {
  .ceo-section {
    grid-template-columns: 1fr;
  }
}
</style>
