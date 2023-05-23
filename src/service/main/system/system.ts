import myRequest from '@/service'

export function postUsersListRequest(queryInfo: any) {
  console.log('queryInfo: ' + JSON.stringify(queryInfo))
  return myRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}

export function deleteUserByIdRequest(id: number) {
  console.log('id: ' + id)
  // return myRequest.delete({
  //   url: `/users/${id}`
  // })
  return myRequest.post({
    url: '/users/list'
  })
}

export function newUserRequest(userInfo: any) {
  console.log('userInfo: ' + JSON.stringify(userInfo))
  // return myRequest.post({
  //   url: '/users',
  //   data: userInfo
  // })
  return myRequest.post({
    url: '/users/list'
  })
}

export function editUserRequest(id: number, userInfo: any) {
  console.log('id: ' + id + '  userInfo: ' + JSON.stringify(userInfo))
  // return myRequest.patch({
  //   url: `/users/${id}`,
  //   data: userInfo
  // })
  return myRequest.post({
    url: '/users/list'
  })
}
