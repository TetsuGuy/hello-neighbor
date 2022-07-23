import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/floors",
    name: "floors",
    component: () =>
      import(/* webpackChunkName: "floors" */ "../views/FloorView.vue"),
  },
  {
    path: "/messages",
    name: "messages",
    component: () =>
      import(/* webpackChunkName: "messages" */ "../views/MessagesView.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () =>
      import(/* webpackChunkName: "calendar" */ "../views/CalendarView.vue"),
  },
  {
    path: "/trade",
    name: "trade",
    component: () =>
      import(/* webpackChunkName: "trade" */ "../views/TradeView.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
