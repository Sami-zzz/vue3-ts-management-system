import {
  getAmountListRequest,
  getGoodsAddressSaleRequest,
  getGoodsCategoryCountRequest,
  getGoodsCategoryFavorRequest,
  getGoodsCategorySaleRequest
} from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountList: any[]
  goodsCategoryCount: any[]
  goodsCategorySale: any[]
  goodsCategoryFavor: any[]
  goodsAddressSale: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: [],
    goodsCategoryCount: [],
    goodsCategorySale: [],
    goodsCategoryFavor: [],
    goodsAddressSale: []
  }),
  actions: {
    async fetchAmountListAction() {
      const amountResult = await getAmountListRequest()
      this.amountList = amountResult.data

      const goodsCountResult = await getGoodsCategoryCountRequest()
      this.goodsCategoryCount = goodsCountResult.data

      const goodsSaleResult = await getGoodsCategorySaleRequest()
      this.goodsCategorySale = goodsSaleResult.data

      const goodsFavorResult = await getGoodsCategoryFavorRequest()
      this.goodsCategoryFavor = goodsFavorResult.data

      const goodsAddressResult = await getGoodsAddressSaleRequest()
      this.goodsAddressSale = goodsAddressResult.data
    }
  }
})

export default useAnalysisStore
