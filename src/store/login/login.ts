import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    name: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? ''
  }),
  actions: {
    async accountLoginAction(account: IAccount) {
      const loginRes: any = await accountLoginRequest(account)
      this.id = loginRes.data.id
      this.name = loginRes.data.name
      this.token = loginRes.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      router.push('/main')
    }
  }
})

export default useLoginStore
