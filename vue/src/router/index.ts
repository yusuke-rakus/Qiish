import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/registeruser",
    component: () => import("@/views/RegisterUser.vue"),
  },
  {
    path: "/loginuser",
    component: () => import("@/views/LoginUser.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
