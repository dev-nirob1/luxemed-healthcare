<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="services-grid">
    <!-- 1. Cardiology -->
    <div class="service-card">
      <div class="card-image">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
        />
      </div>
      <div class="card-content">
        <div class="icon-box"><i class="fas fa-heartbeat"></i></div>
        <h3 class="card-title">Robotic Cardiology</h3>
        <p class="card-text">
          Minimally invasive heart surgery using the Da Vinci Xi system for
          faster recovery and better outcomes.
        </p>
        <RouterLink to="speciality/2" class="details-btn">
          View Details <i class="fas fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>

    <!-- 2. Neurology -->
    <div class="service-card">
      <div class="card-image">
        <img
          src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2070&auto=format&fit=crop"
        />
      </div>
      <div class="card-content">
        <div class="icon-box"><i class="fas fa-brain"></i></div>
        <h3 class="card-title">Cognitive Neurology</h3>
        <p class="card-text">
          Advanced brain mapping and AI-assisted diagnostics for complex
          neurological conditions.
        </p>
        <RouterLink to="neurology.html" class="details-btn">
          View Details <i class="fas fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>

    <!-- 3. Pediatrics -->
    <div class="service-card">
      <div class="card-image">
        <img
          src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2070&auto=format&fit=crop"
        />
      </div>
      <div class="card-content">
        <div class="icon-box"><i class="fas fa-child"></i></div>
        <h3 class="card-title">Advanced Pediatrics</h3>
        <p class="card-text">
          Comprehensive care for children in a warm, fear-free environment
          designed for comfort.
        </p>
        <RouterLink to="pediatrics.html" class="details-btn">
          View Details <i class="fas fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>

    <!-- 4. Genomic Diagnostics (Placeholder) -->
    <div class="service-card">
      <div class="card-image">
        <img
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
        />
      </div>
      <div class="card-content">
        <div class="icon-box"><i class="fas fa-dna"></i></div>
        <h3 class="card-title">Genomic Diagnostics</h3>
        <p class="card-text">
          Personalized medicine based on your DNA profile to predict and prevent
          future illness.
        </p>
        <RouterLink to="#" class="details-btn" onclick="alert('Coming Soon!')">
          View Details <i class="fas fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>

    <!-- 5. Orthopedics (Placeholder) -->
    <div class="service-card">
      <div class="card-image">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop"
        />
      </div>
      <div class="card-content">
        <div class="icon-box"><i class="fas fa-bone"></i></div>
        <h3 class="card-title">Bionic Orthopedics</h3>
        <p class="card-text">
          Joint replacement and rehabilitation using 3D-printed implants and
          robotic guidance.
        </p>
        <RouterLink to="#" class="details-btn" onclick="alert('Coming Soon!')">
          View Details <i class="fas fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>

    <!-- 6. Oncology (Placeholder) -->
    <div class="service-card">
      <div class="card-image">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2074&auto=format&fit=crop"
        />
      </div>
      <div class="card-content">
        <div class="icon-box"><i class="fas fa-ribbon"></i></div>
        <h3 class="card-title">Precision Oncology</h3>
        <p class="card-text">
          Targeted cancer therapies that attack tumors while preserving healthy
          tissue.
        </p>
        <RouterLink to="#" class="details-btn" onclick="alert('Coming Soon!')">
          View Details <i class="fas fa-arrow-right"></i>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  padding: 0 6% 120px;
  max-width: 1400px;
  margin: 0 auto;
}

.service-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
  transition: 0.4s ease;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 240px;
  overflow: hidden;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.6s;
}

.service-card:hover .card-image img {
  transform: scale(1.08);
}

.card-content {
  padding: 1.5rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.icon-box {
  width: 60px;
  height: 60px;
  background: #f4f6f0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--color-primary);
  transition: 0.3s;
}

.service-card:hover .icon-box {
  background: var(--color-primary);
  color: white;
}

.card-title {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 15px;
}

.card-text {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}

.details-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  transition: 0.3s;
}

.details-btn:hover {
  color: var(--color-secondary);
  gap: 15px;
}
</style>
