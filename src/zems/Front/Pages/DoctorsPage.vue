<template>
  <header class="team-hero">
    <h1
      style="
        font-size: clamp(2.5rem, 5vw, 4rem);
        color: var(--color-primary);
        margin-bottom: 20px;
      "
    >
      Review The Best
    </h1>
    <p style="color: #666; max-width: 600px; margin: 0 auto; font-size: 1.2rem">
      Our board-certified specialists are leaders in their fields, dedicated to
      providing compassionate, cutting-edge care.
    </p>
  </header>

  <div class="filter-bar">
    <button class="filter-btn active" onclick="filterDoctors('all')">
      All Specialists
    </button>
    <button class="filter-btn" onclick="filterDoctors('Cardiology')">
      Cardiology
    </button>
    <button class="filter-btn" onclick="filterDoctors('Neurology')">
      Neurology
    </button>
    <button class="filter-btn" onclick="filterDoctors('Pediatrics')">
      Pediatrics
    </button>
    <button class="filter-btn" onclick="filterDoctors('Surgery')">
      Surgery
    </button>
  </div>

  <section class="doctors-grid" id="doctorsGrid">
    <!-- 1. Cardiology -->
    <div class="doc-card" data-category="Cardiology">
      <div class="doc-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
        />
        <div class="social-overlay">
          <i class="fab fa-linkedin"></i>
          <i class="fas fa-envelope"></i>
          <i class="fas fa-phone"></i>
        </div>
      </div>
      <div class="doc-info">
        <div class="doc-dept">Cardiology</div>
        <h3 class="doc-name">Dr. Sarah Jenkins</h3>
        <p class="doc-qual">MD, PhD (Harvard)</p>
        <button class="book-btn">Book Appointment</button>
      </div>
    </div>

    <!-- 2. Neurology -->
    <div class="doc-card" data-category="Neurology">
      <div class="doc-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
        />
        <div class="social-overlay">
          <i class="fab fa-linkedin"></i>
          <i class="fas fa-envelope"></i>
          <i class="fas fa-phone"></i>
        </div>
      </div>
      <div class="doc-info">
        <div class="doc-dept">Neurology</div>
        <h3 class="doc-name">Dr. Alexander Ray</h3>
        <p class="doc-qual">MD, FACS (Johns Hopkins)</p>
        <button class="book-btn">Book Appointment</button>
      </div>
    </div>

    <!-- 3. Pediatrics -->
    <div class="doc-card" data-category="Pediatrics">
      <div class="doc-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2000&auto=format&fit=crop"
        />
        <div class="social-overlay">
          <i class="fab fa-linkedin"></i>
          <i class="fas fa-envelope"></i>
          <i class="fas fa-phone"></i>
        </div>
      </div>
      <div class="doc-info">
        <div class="doc-dept">Pediatrics</div>
        <h3 class="doc-name">Dr. Emily Chen</h3>
        <p class="doc-qual">MD (Stanford)</p>
        <button class="book-btn">Book Appointment</button>
      </div>
    </div>

    <!-- 4. Surgery -->
    <div class="doc-card" data-category="Surgery">
      <div class="doc-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
        />
        <div class="social-overlay">
          <i class="fab fa-linkedin"></i>
          <i class="fas fa-envelope"></i>
          <i class="fas fa-phone"></i>
        </div>
      </div>
      <div class="doc-info">
        <div class="doc-dept">General Surgery</div>
        <h3 class="doc-name">Dr. Marcus Webb</h3>
        <p class="doc-qual">MD, FRCS (Oxford)</p>
        <button class="book-btn">Book Appointment</button>
      </div>
    </div>

    <!-- 5. Cardiology 2 -->
    <div class="doc-card" data-category="Cardiology">
      <div class="doc-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
        />
        <div class="social-overlay">
          <i class="fab fa-linkedin"></i>
          <i class="fas fa-envelope"></i>
          <i class="fas fa-phone"></i>
        </div>
      </div>
      <div class="doc-info">
        <div class="doc-dept">Cardiology</div>
        <h3 class="doc-name">Dr. Lisa Wong</h3>
        <p class="doc-qual">MD (Yale)</p>
        <button class="book-btn">Book Appointment</button>
      </div>
    </div>

    <!-- 6. Neurology 2 -->
    <div class="doc-card" data-category="Neurology">
      <div class="doc-img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
        />
        <div class="social-overlay">
          <i class="fab fa-linkedin"></i>
          <i class="fas fa-envelope"></i>
          <i class="fas fa-phone"></i>
        </div>
      </div>
      <div class="doc-info">
        <div class="doc-dept">Neurology</div>
        <h3 class="doc-name">Dr. James Carter</h3>
        <p class="doc-qual">MD (Cambridge)</p>
        <button class="book-btn">Book Appointment</button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.team-hero {
  text-align: center;
  padding: 180px 6% 100px;
  background: radial-gradient(
    circle at 50% 100%,
    rgba(200, 230, 255, 0.2) 0%,
    transparent 60%
  );
}

.filter-bar {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.filter-btn {
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
  padding: 10px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  transition: 0.3s;
  color: #555;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.doctors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
  padding: 0 6% 120px;
  max-width: 1400px;
  margin: 0 auto;
}

.doc-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 1;
  transform: translateY(0);
}

.doc-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
}

.doc-card.hide {
  display: none;
}

.doc-img-wrapper {
  height: 320px;
  position: relative;
  overflow: hidden;
}
.doc-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
}
.doc-card:hover .doc-img-wrapper img {
  transform: scale(1.05);
}

.social-overlay {
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  gap: 20px;
  transition: 0.4s;
}

.doc-card:hover .social-overlay {
  bottom: 0;
}

.social-overlay i {
  color: var(--color-primary);
  cursor: pointer;
  transition: 0.2s;
}
.social-overlay i:hover {
  color: var(--color-secondary);
}

.doc-info {
  padding: 25px;
  text-align: center;
}

.doc-dept {
  color: var(--color-secondary);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 5px;
}

.doc-name {
  font-size: 1.4rem;
  color: var(--color-primary);
  margin-bottom: 10px;
}

.doc-qual {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 20px;
}

.book-btn {
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  background: transparent;
  border-radius: 12px;
  font-weight: 600;
  color: var(--color-primary);
  cursor: pointer;
  transition: 0.3s;
}
.book-btn:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}
</style>
