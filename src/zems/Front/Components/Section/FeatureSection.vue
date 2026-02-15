<template>
  <!-- 2. Bento Highlights -->
  <section class="feature-grid">
    <!-- Large Image with Parallax feel -->
    <div
      class="feature-card span-12 reveal-up"
      style="padding: 0; height: 600px; border: none"
    >
      <img
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
        style="width: 100%; height: 100%; object-fit: cover"
      />
      <div
        style="
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 60px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
          color: white;
        "
      >
        <h3 style="font-size: 2.5rem; margin-bottom: 10px">
          The Sanctuary Campus
        </h3>
        <p style="font-size: 1.2rem; opacity: 0.9; max-width: 500px">
          Biophilic design meets sterile precision.
        </p>
      </div>
    </div>

    <!-- Mission -->
    <div
      class="feature-card span-6 reveal-up"
      style="display: flex; flex-direction: column; justify-content: center"
    >
      <span class="hero-tag" style="align-self: flex-start"
        >Our Philosophy</span
      >
      <p class="mission-statement">
        "We believe healthcare should be
        <span style="color: var(--color-secondary); font-style: italic"
          >predictive</span
        >, not just reactive. We solve problems before they start."
      </p>
    </div>

    <!-- Stats with clean typography -->
    <div class="feature-card span-6 reveal-up">
      <div
        style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          text-align: center;
        "
      >
        <div>
          <h3
            style="
              font-size: 3.5rem;
              color: var(--color-secondary);
              margin-bottom: 0px;
              line-height: 1;
            "
          >
            15k<span style="font-size: 1.5rem">+</span>
          </h3>
          <p
            style="
              text-transform: uppercase;
              font-size: 0.8rem;
              letter-spacing: 1px;
              margin-top: 10px;
            "
          >
            Surgeries
          </p>
        </div>
        <div>
          <h3
            style="
              font-size: 3.5rem;
              color: var(--color-secondary);
              margin-bottom: 0px;
              line-height: 1;
            "
          >
            99<span style="font-size: 1.5rem">%</span>
          </h3>
          <p
            style="
              text-transform: uppercase;
              font-size: 0.8rem;
              letter-spacing: 1px;
              margin-top: 10px;
            "
          >
            Satisfaction
          </p>
        </div>
        <div>
          <h3
            style="
              font-size: 3.5rem;
              color: var(--color-secondary);
              margin-bottom: 0px;
              line-height: 1;
            "
          >
            350
          </h3>
          <p
            style="
              text-transform: uppercase;
              font-size: 0.8rem;
              letter-spacing: 1px;
              margin-top: 10px;
            "
          >
            Specialists
          </p>
        </div>
        <div>
          <h3
            style="
              font-size: 3.5rem;
              color: var(--color-secondary);
              margin-bottom: 0px;
              line-height: 1;
            "
          >
            24<span style="font-size: 1.5rem">/7</span>
          </h3>
          <p
            style="
              text-transform: uppercase;
              font-size: 0.8rem;
              letter-spacing: 1px;
              margin-top: 10px;
            "
          >
            Emergency
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* Bento Grid Highlights */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
  padding: 0 6% 100px;
  max-width: 1600px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 32px;
  padding: 50px;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.02),
    inset 0 0 0 1px rgba(255, 255, 255, 0.6);
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.005);
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.06),
    inset 0 0 0 1px rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.9);
}

/* Grid Spanning logic */
.span-12 {
  grid-column: span 12;
}
.span-6 {
  grid-column: span 6;
}
.span-4 {
  grid-column: span 4;
}
.span-8 {
  grid-column: span 8;
}

.mission-statement {
  font-size: 2.2rem;
  line-height: 1.3;
  color: var(--color-primary);
  font-weight: 300;
  letter-spacing: -0.02em;
}
</style>
