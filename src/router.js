import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/home/HomePage.vue";
import CityPage from "./pages/city/CityPage.vue";
import DetailPage from "./pages/detail/DetailPage.vue";

const router = createRouter({
  history: createWebHistory("/travel-review/"),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/city",
      component: CityPage,
    },
    {
      path: "/detail/:itemId",
      component: DetailPage,
    },
    {
      path: "/:notFound(.*)",
      redirect: "/",
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
