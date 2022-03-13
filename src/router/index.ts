import { createWebHistory, createRouter } from "vue-router";
import Search from "@/pages/Search.vue";
import Library from "@/pages/Library.vue";

const routes = [
  {
    path: "/",
    name: "Search",
    component: Search,
  },
  {
    path: "/library",
    name: "Library",
    component: Library,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
