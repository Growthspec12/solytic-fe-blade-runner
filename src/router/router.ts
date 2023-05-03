import { createRouter, createWebHistory } from "vue-router";
import UserPage from "../views/UserPage.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage
  },
  {
    path: "/user",
    name: "user",
    component: UserPage
    // meta: {
    //   needLogin: true
    // }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach(async (to, _, next) => {
//   if (!to.meta.needAuth) {
//     next();
//     return;
//   }
//   getItem("token") ? next() : next("/login");
// });

export default router;
