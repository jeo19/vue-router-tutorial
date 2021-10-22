import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const About = () => {
  return import(/* webpackChunkName: "about" */ "../views/About.vue");
};
const Users = () => {
  return import(/* webpackChunkName: "about" */ "../views/Users.vue");
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    children: [
      {
        path: "/users/:id",
        name: "users",
        component: Users,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
