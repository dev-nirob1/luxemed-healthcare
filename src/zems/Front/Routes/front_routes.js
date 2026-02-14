import MainLayout from "../Layout/MainLayout.vue";
import HomePage from "../Pages/HomePage.vue";

export const front_routes = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", name: "home", component: HomePage }],
  },
];
