//加载本地的路由
function loadLocalRoutes() {
  const localRoutes = []
  const files: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true
  })
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }
  return localRoutes
}

//根据返回菜单映射路由
export function mapMenustoRoutes(userMenus: any[]) {
  const localRoutes = loadLocalRoutes()
  const routes = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) routes.push(route)
    }
  }
  return routes
}
