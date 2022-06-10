import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import SearchPage from "./views/SearchPage.vue";
import TeamPage from "./views/TeamPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/searchpage",
    name: "SearchPage",
    component: SearchPage,
  },
  {
    path: "/teampage",
    name: "TeamPage",
    component: TeamPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
