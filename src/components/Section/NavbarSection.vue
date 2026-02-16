<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import TopNav from "./TopNav.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  const navbar = document.querySelector(".nav-links");
  console.log(navbar);
  navbar.childNodes.forEach((li) => {
    li.addEventListener("click", () => {
      isMenuOpen.value = false;
    });
  });
});
</script>

<template>
  <TopNav />
  <header class="relative">
    <div class="container">
      <nav class="flex justify-between align-center">
        <RouterLink to="/" class="logo">
          LuxeMed<span style="color: var(--color-secondary)">.</span>
        </RouterLink>
        <div class="mobile-toggle" @click="toggleMenu">
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </div>
        <ul class="nav-links" :class="isMenuOpen ? 'open' : ''">
          <ListItem>
            <RouterLink to="/">Home</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/specialities">Specialities</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/about">Innovation</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/doctors">Team</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/contact">Contact</RouterLink>
          </ListItem>
          <ListItem>
            <BaseButton class="bg-primary text-white">Appointment</BaseButton>
          </ListItem>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped>
header {
  padding: 0.75rem 0;
  background: var(--white-color);
}

.logo {
  font-size: 2rem;
  font-weight: bold;
}
.nav-links {
  height: 100vh;
  width: 70vw;
  font-weight: 600;
  font-size: 1rem;
  background: var(--white-color);
  position: absolute;
  top: 4.75rem;
  right: 0;
  transform: translateX(100%);
  visibility: hidden;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.nav-links.open {
  transform: translateX(0);
  visibility: visible;
}
.nav-links .btn.bg-primary {
  color: var(--white-color);
}
.nav-links .btn.bg-primary:hover {
  background-color: var(--secondary-color);
}
.mobile-toggle {
  display: block;
}
@media (min-width: 768px) {
  .nav-links {
    height: auto;
    width: auto;
    padding: 0;
    background: none;
    position: static;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    transform: translateX(0);
    visibility: visible;
  }
  .mobile-toggle {
    display: none;
  }
}
</style>
