<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <!-- 1️⃣ Top Info Bar -->
  <div class="top-bar">
    <div>
      <i class="fas fa-heartbeat" style="color: var(--color-accent)"></i>
      Leading the future of personalized medicine
    </div>
    <div style="display: flex; gap: 20px">
      <span><i class="fas fa-phone-alt"></i> +880 1234 567 890</span>
      <span><i class="fas fa-map-marker-alt"></i> New York, USA</span>
    </div>
  </div>

  <!-- 2️⃣ Navigation -->
  <nav class="navbar">
    <div class="logo">
      LuxeMed<span style="color: var(--color-secondary)">.</span>
    </div>
    <div class="mobile-toggle" @click="toggleMenu">
      <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
    </div>
    <ul class="nav-links" :class="{ active: isMenuOpen }">
      <div class="mobile-close" @click="closeMenu">
        <i class="fas fa-times"></i>
      </div>
      <li><a href="#home" @click="closeMenu">Home</a></li>
      <li>
        <a href="pages/specialties.html" @click="closeMenu">Specialties</a>
      </li>
      <li>
        <a href="pages/about.html" @click="closeMenu">Innovation</a>
      </li>
      <li><a href="pages/doctors.html" @click="closeMenu">Team</a></li>
      <li><a href="pages/contact.html" @click="closeMenu">Contact</a></li>
      <li>
        <button
          class="btn btn-primary"
          style="padding: 10px 24px; font-size: 0.9rem"
          onclick="window.location.href = 'pages/appointment.html'"
        >
          Book Visit
        </button>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
/* Header & Nav (Preserved & Tweaked) */
.top-bar {
  background-color: var(--color-primary);
  color: rgba(255, 255, 255, 0.9);
  padding: 12px var(--container-padding);
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar {
  padding: 24px var(--container-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(253, 251, 247, 0.85); /* Matches warm bg */
  backdrop-filter: blur(var(--blur-amount));
  -webkit-backdrop-filter: blur(var(--blur-amount));
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  transition: padding 0.3s ease;
}

.navbar.scrolled {
  padding: 16px var(--container-padding);
  background: rgba(253, 251, 247, 0.95);
  box-shadow: var(--shadow-sm);
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.03em;
}

.nav-links {
  display: flex;
  gap: 48px;
}

.nav-links a {
  font-weight: 500;
  color: var(--color-text-main);
  position: relative;
  font-size: 1rem;
}

.nav-links a:hover {
  color: var(--color-secondary);
}

.mobile-toggle {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-close {
  display: none;
}
@media (max-width: 768px) {
  .mobile-close {
    display: block;
    position: absolute;
    top: 25px;
    right: 30px;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--color-primary);
    padding: 10px;
  }

  .top-bar {
    display: none;
  }

  .mobile-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 80%;
    max-width: 300px;
    background: var(--color-background);
    display: flex; /* Ensure flex is explicit */
    flex-direction: column;
    padding: 80px 40px;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    visibility: hidden;
    transition:
      transform 0.4s cubic-bezier(0.77, 0, 0.175, 1),
      visibility 0s linear 0.4s;
    z-index: 1001; /* Higher than navbar */
  }

  .nav-links.active {
    transform: translateX(0);
    visibility: visible;
    transition:
      transform 0.4s cubic-bezier(0.77, 0, 0.175, 1),
      visibility 0s linear 0s;
  }
}
</style>
