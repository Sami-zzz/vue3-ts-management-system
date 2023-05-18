import {
  accountLoginRequest,
  getUserInfoByIdRequest,
  getUserMenusByRoleIdRequest
} from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'
import { mapMenustoRoutes } from '@/utils/mapMenu'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async accountLoginAction(account: IAccount) {
      const loginResult: any = await accountLoginRequest(account)
      const id = loginResult.data.id
      // 缓存token
      this.token = loginResult.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      //获取用户详细信息
      const userInfoResult: any = await getUserInfoByIdRequest(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo

      //获取菜单
      const userMenusResult: any = await getUserMenusByRoleIdRequest(
        this.userInfo.role.id
      )
      const userMenus = userMenusResult.data
      this.userMenus = userMenus
      console.log(userMenus)

      localCache.setCache('userInfo', userInfo)
      localCache.setCache('userMenus', userMenus)

      //加载本地路由
      const routes = mapMenustoRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      router.push('/main')
    },
    //处理页面刷新
    loadLocalCacheAction() {
      //获取本地数据
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus
        //加载路由
        const routes = mapMenustoRoutes(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
