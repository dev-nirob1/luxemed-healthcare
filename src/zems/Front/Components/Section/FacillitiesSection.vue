<template>
  <section class="facilities-grid reveal-up">
    <div style="grid-column: 1 / -1; text-align: center; margin-bottom: 40px">
      <span class="hero-tag">Our Facilities</span>
      <h2 style="font-size: 3rem; color: var(--color-primary)">
        World-Class Infrastructure
      </h2>
    </div>

    <div class="facility-card">
      <img
        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
      />
      <div class="facility-info">
        <h3>Smart Suites</h3>
        <p>Private patient rooms with voice-controlled ambience.</p>
      </div>
    </div>
    <div class="facility-card">
      <img
        src="https://images.unsplash.com/photo-1516549655169-df83a253836f?q=80&w=2070&auto=format&fit=crop"
      />
      <div class="facility-info">
        <h3>Robotic ORs</h3>
        <p>Equipped with Da Vinci Xi and Zeiss Kinevo systems.</p>
      </div>
    </div>
    <div class="facility-card">
      <img
        src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop"
      />
      <div class="facility-info">
        <h3>Diagnostic Hub</h3>
        <p>Pathology and Imaging results in under 60 minutes.</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* Facilities Grid */
.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  padding: 120px 6%;
}
.facility-card {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  aspect-ratio: 4/5;
}
.facility-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.7s ease;
}
.facility-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 40px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  transform: translateY(20px);
  transition: 0.5s ease;
}
.facility-card:hover img {
  transform: scale(1.05);
}
.facility-card:hover .facility-info {
  transform: translateY(0);
}
</style>
