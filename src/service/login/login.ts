import type { IAccount } from '@/types'
import myRequest from '..'

export function accountLoginRequest(account: IAccount) {
  return myRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoByIdRequest(id: number) {
  return myRequest.get({
    url: `users/${id}`
  })
}
