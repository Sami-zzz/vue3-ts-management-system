import myRequest from '@/service'

//用户
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

//部门
export function postPageListRequest(pageName: string, queryInfo: any) {
  return myRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

export function deletePageByIdRequest(pageName: string, id: number) {
  console.log('id: ' + id)
  // return myRequest.delete({
  //   url: `/${pageName}/${id}`
  // })
  return myRequest.post({
    url: `/${pageName}/list`
  })
}

export function newPageRequest(pageName: string, pageInfo: any) {
  console.log('pageInfo: ' + JSON.stringify(pageInfo))
  // return myRequest.post({
  //   url: `/${pageName}`,
  //   data: pageInfo
  // })
  return myRequest.post({
    url: `/${pageName}/list`
  })
}

export function editPageRequest(pageName: string, id: number, pageInfo: any) {
  console.log('id: ' + id + '  pageInfo: ' + JSON.stringify(pageInfo))
  // return myRequest.patch({
  //   url: `/${pageName}/${id}`,
  //   data: pageInfo
  // })
  return myRequest.post({
    url: `/${pageName}/list`
  })
}
