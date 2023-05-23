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
import { mapMenusToRoutes } from '@/utils/mapMenu'
import useMainStore from '../main/main'

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
      // 1.获取token并缓存
      const loginResult = await accountLoginRequest(account)
      const id = loginResult.data.id
      this.token = loginResult.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      //2.获取用户详细信息
      const userInfoResult = await getUserInfoByIdRequest(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo

      //3.获取菜单
      const userMenusResult = await getUserMenusByRoleIdRequest(
        this.userInfo.role.id
      )
      const userMenus = userMenusResult.data
      this.userMenus = userMenus

      //4.缓存用户和菜单
      localCache.setCache('userInfo', userInfo)
      localCache.setCache('userMenus', userMenus)

      //5.获取所有roles和departments的数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()

      //6.加载本地路由
      const routes = mapMenusToRoutes(userMenus)
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

        //获取所有roles和departments的数据
        const mainStore = useMainStore()
        mainStore.fetchEntireDataAction()

        //加载路由
        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
