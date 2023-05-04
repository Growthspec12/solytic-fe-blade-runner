import { createRouter, createWebHistory } from "vue-router";
import UserPage from "../views/UserPage.vue";
import LoginPage from "../views/LoginPage.vue";
import { canUserAccess } from "../helpers/userAccess";

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
    component: UserPage,
    meta: {
      needLogin: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, _, next) => {
  if (!to.meta.needLogin) {
    next();
    return;
  }
  await canUserAccess() ? next() : next("/login");
});

export default router;
