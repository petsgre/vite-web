import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import { getCookie } from "../tools"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/goods",
      name: "goods",
      component: () => import("../views/Goods/GoodsView.vue"),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const token = getCookie("token")
  console.log(
    "🚀 ~ file: index.js ~ line 30 ~ router.beforeEach ~ token",
    token
  )
  if (to.name !== "home" && !token) {
    window.location.href = `http://localhost:3001/login?backUrl=${encodeURIComponent(
      location.href
    )}`
  } else {
    next()
  }
})

export default router
