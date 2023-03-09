import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home/bookstore",
  },
  {
    path: "/home",
    component: HomeView,
    children: [
      {
        path: "bookstore",
        component: () => import("../views/bookstore/BookStore.vue"),
        meta: {
          keepAlive: true, // 自定义的meta属性，用于表示该路由要保活
        },
      },
      {
        path: "bookshelf",
        component: () => import("../views/bookshelf/BookShelf.vue"),
      },
      {
        path: "classification",
        component: () => import("../views/classification/Classification.vue"),
      },
      {
        path: "me",
        component: () => import("../views/me/Me.vue"),
      },
    ],
  },
  {
    path: "/home/headpicture",
    name: "headpicture",
    component: () => import("../views/me/HeadPicture.vue"),
  },
  {
    path: "/home/footprint",
    name: "footprint",
    component: () => import("../views/me/FootPrint.vue"),
  },
  {
    path: "/home/set",
    name: "set",
    component: () => import("../views/me/Set.vue"),
  },
  {
    path: "/home/opinion",
    name: "opinion",
    component: () => import("../views/me/Opinion.vue"),
  },
  {
    path: "/home/personal",
    name: "personal",
    component: () => import("../views/me/Personal.vue"),
  },
  {
    path: "/home/safety",
    name: "safety",
    component: () => import("../views/me/password/Safety.vue"),
  },
  {
    path: "/home/password",
    name: "password",
    component: () => import("../views/me/password/Password.vue"),
  },
  {
    path: "/home/privacy",
    name: "privacy",
    component: () => import("../views/me/Privacy.vue"),
  },
  {
    path: "/home/reading",
    name: "reading",
    component: () => import("../views/me/Reading.vue"),
  },
  {
    path: "/home/notice",
    name: "notice",
    component: () => import("../views/me/Notice.vue"),
  },
  {
    path: "/home/we",
    name: "we",
    component: () => import("../views/me/We.vue"),
  },
  {
    path: "/home/agreement",
    name: "agreement",
    component: () => import("../views/me/Agreement.vue"),
  },
  {
    path: "/home/directory",
    name: "directory",
    component: () => import("../views/bookstore/Directory.vue"),
  },
  {
    path: "/home/comment",
    name: "comment",
    component: () => import("../views/bookstore/Comment.vue"),
  },
  {
    path: "/home/more",
    name: "more",
    component: () => import("../views/bookstore/More.vue"),
  },
  {
    path: "/home/more",
    name: "more",
    component: () => import("../views/bookstore/More.vue"),
  },
  {
    path: "/home/search",
    name: "search",
    component: () => import("../views/bookstore/Search.vue"),
  },
  {
    path: "/home/details",
    name: "details",
    component: () => import("../views/bookstore/Details.vue"),
  },
  {
    path: "/home/login",
    name: "login",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/home/regester",
    name: "regester",
    component: () => import("../views/login/Regester.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
