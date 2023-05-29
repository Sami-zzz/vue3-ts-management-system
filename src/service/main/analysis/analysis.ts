import myRequest from '@/service'

export function getAmountListRequest() {
  return myRequest.get({
    url: '/goods/amount/list'
  })
}
