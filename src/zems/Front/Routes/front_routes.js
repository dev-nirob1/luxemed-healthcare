import MainLayout from "../Layout/MainLayout.vue";
import AboutPage from "../Pages/AboutPage.vue";
import ContactPage from "../Pages/ContactPage.vue";
import DoctorsPage from "../Pages/DoctorsPage.vue";
import HomePage from "../Pages/HomePage.vue";
import SpecialitiesPage from "../Pages/SpecialitiesPage.vue";

export const front_routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", name: "home", component: HomePage },
      {
        path: "/specialities",
        name: "specialities",
        component: SpecialitiesPage,
      },
      {
        path: "/about",
        name: "about",
        component: AboutPage,
      },
      {
        path: "/doctors",
        name: "doctors",
        component: DoctorsPage,
      },
      {
        path: "/contact",
        name: "contact",
        component: ContactPage,
      },
    ],
  },
];
