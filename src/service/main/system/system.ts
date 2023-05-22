import myRequest from '@/service'

export function postUsersListRequest(queryInfo: any) {
  console.log(queryInfo)
  return myRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}
