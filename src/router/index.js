import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Main.vue"),
    },
    {
      path: "/board",
      name: "board",
      component: () => import("../views/Board.vue"),
    },
  ],
});

export default router;
