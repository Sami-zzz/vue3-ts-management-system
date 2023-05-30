import myRequest from '@/service'

export function getAmountListRequest() {
  return myRequest.get({
    url: '/goods/amount/list'
  })
}

export function getGoodsCategoryCountRequest() {
  return myRequest.get({
    url: '/goods/category/count'
  })
}

export function getGoodsCategorySaleRequest() {
  return myRequest.get({
    url: '/goods/category/sale'
  })
}

export function getGoodsCategoryFavorRequest() {
  return myRequest.get({
    url: '/goods/category/favor'
  })
}

export function getGoodsAddressSaleRequest() {
  return myRequest.get({
    url: '/goods/address/sale'
  })
}
