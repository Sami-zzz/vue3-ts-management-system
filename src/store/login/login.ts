import {
  accountLoginRequest,
  getUserInfoByIdRequest
} from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'

const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: {}
  }),
  actions: {
    async accountLoginAction(account: IAccount) {
      const loginRes: any = await accountLoginRequest(account)
      const id = loginRes.data.id
      // 缓存token
      this.token = loginRes.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      const userInfoRes: any = await getUserInfoByIdRequest(id)
      this.userInfo = userInfoRes.data
      console.log(this.userInfo)

      router.push('/main')
    }
  }
})

export default useLoginStore
