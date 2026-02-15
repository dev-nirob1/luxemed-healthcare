<template>
  <!-- 4. Timeline / History -->
  <section class="history-section reveal-up">
    <div class="container" style="max-width: 1400px; margin: 0 auto">
      <h2
        style="
          font-size: 3rem;
          margin-bottom: 60px;
          color: var(--color-primary);
          text-align: center;
        "
      >
        A Legacy of Innovation
      </h2>
      <div class="timeline-scroll">
        <div class="timeline-item">
          <span
            style="
              font-size: 4rem;
              font-weight: 700;
              color: rgba(0, 0, 0, 0.05);
              display: block;
              line-height: 0.8;
            "
            >2018</span
          >
          <h4 style="font-size: 1.4rem; font-weight: 700; margin-top: 10px">
            The Beginning
          </h4>
          <p style="color: #666; margin-top: 5px">
            Dr. Weiss opens the first boutique clinic in Zurich.
          </p>
        </div>
        <div class="timeline-item">
          <span
            style="
              font-size: 4rem;
              font-weight: 700;
              color: rgba(0, 0, 0, 0.05);
              display: block;
              line-height: 0.8;
            "
            >2021</span
          >
          <h4 style="font-size: 1.4rem; font-weight: 700; margin-top: 10px">
            Robotic First
          </h4>
          <p style="color: #666; margin-top: 5px">
            First fully autonomous AI-assisted heart surgery.
          </p>
        </div>
        <div class="timeline-item">
          <span
            style="
              font-size: 4rem;
              font-weight: 700;
              color: rgba(0, 0, 0, 0.05);
              display: block;
              line-height: 0.8;
            "
            >2024</span
          >
          <h4 style="font-size: 1.4rem; font-weight: 700; margin-top: 10px">
            Global Expansion
          </h4>
          <p style="color: #666; margin-top: 5px">
            Centers opened in Tokyo, New York, and London.
          </p>
        </div>
        <div class="timeline-item">
          <span
            style="
              font-size: 4rem;
              font-weight: 700;
              color: var(--color-secondary);
              display: block;
              line-height: 0.8;
            "
            >2026</span
          >
          <h4 style="font-size: 1.4rem; font-weight: 700; margin-top: 10px">
            The Eco-Campus
          </h4>
          <p style="color: #666; margin-top: 5px">
            A carbon-negative hospital model for the world.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* Timeline Section */
.history-section {
  padding: 120px 6%;
  background: linear-gradient(180deg, #fff 0%, #fbfbfb 100%);
}
.timeline-scroll {
  display: flex;
  gap: 60px;
  overflow-x: auto;
  padding: 20px 0 60px;
  scrollbar-width: none; /* Hide scrollbar Firefox */
}
.timeline-scroll::-webkit-scrollbar {
  display: none;
} /* Hide Chrome */

.timeline-item {
  min-width: 320px;
  position: relative;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.timeline-item::before {
  content: "";
  position: absolute;
  top: -5px;
  left: 0;
  width: 9px;
  height: 9px;
  background: var(--color-primary);
  border-radius: 50%;
}
.timeline-item:hover {
  border-color: var(--color-secondary);
}
.timeline-item:hover::before {
  background: var(--color-secondary);
  transform: scale(1.5);
}
</style>
