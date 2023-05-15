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

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: localCache.getCache('userInfo') ?? '',
    userMenus: localCache.getCache('userMenus') ?? ''
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

      localCache.setCache('userInfo', userInfo)
      localCache.setCache('userMenus', userMenus)

      router.push('/main')
    }
  }
})

export default useLoginStore
