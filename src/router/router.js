import { createRouter, createWebHistory } from "vue-router";
import { front_routes } from "../zems/Front/Routes/front_routes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...front_routes],
});
