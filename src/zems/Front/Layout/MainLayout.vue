<script setup>
import { RouterView } from "vue-router";
import NavbarSection from "../../../components/Section/NavbarSection.vue";
import FooterSection from "../../../components/Section/FooterSection.vue";
</script>

<template>
  <NavbarSection />
  <RouterView />
  <FooterSection />
</template>
