import { createRouter, createWebHistory } from "vue-router"

const history = createWebHistory()
const routes = [
    { path: "/", component: () => import("../views/PageOne.vue") },
    { path: "/information", component: () => import("../views/PageTwo.vue") },
]

const router = createRouter({ history, routes })
export default router