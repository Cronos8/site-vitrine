import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import Projects from "@/views/Projects";
import Resume from "@/views/Resume";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/resume",
      name: "Resume",
      component: Resume,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;