import router from '@/router'

// 检查某个路由 name 是否已存在
function hasRoute(name) {
  return !!router.getRoutes().find((route) => route.name === name)
}

// 安全添加单个路由
export function addRouteSafely(route) {
  if (!hasRoute(route.name)) {
    router.addRoute(route)
  }
  if (route.children && route.children.length > 0) {
    route.children.forEach((child) => {
      if (!hasRoute(child.name)) {
        router.addRoute(route.name, child)
      }
    })
  }
}

// 安全添加多个路由
export function addRoutesSafely(routes) {
  routes.forEach((route) => addRouteSafely(route))
}
