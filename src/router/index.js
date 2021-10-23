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
const UsersDetail = () => {
  return import(/* webpackChunkName: "about" */ "../views/UsersDetail.vue");
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
        path: ":id",
        name: "users-detail",
        component: UsersDetail,
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
