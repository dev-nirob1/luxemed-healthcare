<template>
  <div class="stats-section">
    <div class="container stats-strip">
      <div class="stat-box">
        <h3>99%</h3>
        <p>Patient Satisfaction</p>
      </div>
      <div class="stat-box">
        <h3>15m</h3>
        <p>Wait Time (Avg)</p>
      </div>
      <div class="stat-box">
        <h3>24/7</h3>
        <p>AI Monitoring</p>
      </div>
      <div class="stat-box">
        <h3>50+</h3>
        <p>Specialists</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.stats-section {
  padding: 3.75rem 0;
  background: var(--color-primary);
}
.stats-strip {
  display: flex;
  justify-content: space-around;
  color: white;
  z-index: 10;
  position: relative;
  box-shadow: var(--shadow-lg);
}

.stat-box {
  text-align: center;
}

.stat-box h3 {
  font-size: 2.5rem;
  margin-bottom: 5px;
  color: var(--color-accent);
}

.stat-box p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}
@media (max-width: 768px) {
  .stats-strip {
    flex-direction: column;
    gap: 40px;
    padding: 40px;
  }
}
</style>
