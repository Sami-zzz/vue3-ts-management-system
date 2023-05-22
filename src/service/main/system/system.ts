import myRequest from '@/service'

export function postUsersListRequest(queryInfo: any) {
  console.log(queryInfo)
  return myRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}

export function deleteUserByIdRequest(id: number) {
  console.log(id)
  // return myRequest.delete({
  //   url: `/users/${id}`
  // })
  return myRequest.post({
    url: '/users/list'
  })
}
