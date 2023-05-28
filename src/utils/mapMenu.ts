import type { RouteRecordRaw } from 'vue-router'

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

export let firstMenu: any = null

//根据返回菜单映射路由
export function mapMenusToRoutes(userMenus: any[]) {
  const localRoutes = loadLocalRoutes()
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      //给一级菜单添加路由重定向
      if (route) {
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }
        //添加二级菜单路由
        routes.push(route)
      }
      if (!firstMenu && route) {
        firstMenu = submenu
      }
    }
  }
  return routes
}

//根据路径匹配菜单
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }
}

//根据路径返回面包屑
export function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
  const breadcrumbs = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        breadcrumbs.push({ name: menu.name, path: menu.url })
        breadcrumbs.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadcrumbs
}

export function mapMenusListToIds(menulist: any[]) {
  const ids: number[] = []
  function recurseGetId(menulist: any[]) {
    for (const item of menulist) {
      if (item.children) {
        recurseGetId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  recurseGetId(menulist)
  return ids
}
