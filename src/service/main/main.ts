import myRequest from '..'

export function getEntireRolesRequest() {
  return myRequest.post({
    url: '/role/list'
  })
}

export function getEntireDepartmentsRequest() {
  return myRequest.post({
    url: '/department/list'
  })
}
