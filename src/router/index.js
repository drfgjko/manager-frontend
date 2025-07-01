import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes } from './staticRoutes'
import { frontRoutes } from './frontRoutes'
import { backRoutes } from './backRoutes'
import { addRoutesSafely } from '@/utils/addRoutesSafely'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes,
})

export function addBackRoutes() {
  addRoutesSafely(backRoutes)
}

export function addFrontRoutes() {
  addRoutesSafely(frontRoutes)
}

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('xm-user') || '{}')

  if (to.path === '/') {
    if (user?.role === 'ADMIN') {
      next('/home')
    } else if (user?.role === 'USER') {
      next('/front/home')
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router

export function useRouter() {
  return router
}
