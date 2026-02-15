import MainLayout from "../Layout/MainLayout.vue";
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
    ],
  },
];
