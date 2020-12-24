import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/home.vue";
import Integrations from "./views/integrations.vue";
import About from "./views/about.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/integrations",
    name: "Integrations",
    component: Integrations,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;