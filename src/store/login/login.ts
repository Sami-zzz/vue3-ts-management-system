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

      const userInfoResult: any = await getUserInfoByIdRequest(id)
      this.userInfo = userInfoResult.data

      console.log(this.userInfo.role.id)
      const userMenusResult: any = await getUserMenusByRoleIdRequest(
        this.userInfo.role.id
      )
      this.userMenus = userMenusResult.data
      console.log(this.userMenus)

      router.push('/main')
    }
  }
})

export default useLoginStore
