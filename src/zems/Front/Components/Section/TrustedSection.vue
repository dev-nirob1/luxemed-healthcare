<template>
  <section class="trusted-section">
    <div class="container">
      <h3 class="accreditation-tagline">INTERNATIONALLY ACCREDITED BY</h3>
      <div class="accreditation-icons">
        <i class="fas fa-globe-americas"></i>
        <i class="fas fa-shield-alt"></i>
        <i class="fas fa-award"></i>
        <i class="fas fa-university"></i>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trusted-section {
  background: #14201a;
  padding: 100px 6%;
  text-align: center;
  color: white;
}

.accreditation-tagline {
  opacity: 0.5;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 60px;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.accreditation-icons {
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
}

.accreditation-icons i {
  font-size: 3rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.accreditation-icons i:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .trusted-section {
    padding: 60px 2%;
  }

  .accreditation-icons {
    gap: 40px;
  }

  .accreditation-icons i {
    font-size: 2.5rem;
  }
}
</style>
