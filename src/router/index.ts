import { createRouter, createWebHistory } from "vue-router";
import index from "../pages/index.vue";
const routes = [
  {path: "/", name: "index", component: index},
  {
    path: "/clinics",
    name: "clinics",
    component: () => import("../pages/clinicsPage.vue")
  },
  {
    path: "/turns",
    name: "turns",
    component: () => import("../pages/turnsPage.vue")
  },
  {
    path: "/doctors",
    name: "doctors",
    component: () => import("../pages/doctorsPage.vue")
  }
  ,
{
  path:"/answers",
  name:"answers",
  component: ()=> import("../pages/answersPage.vue")
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 ,  margin: 0,
      padding: 0}
  }
})
export default router