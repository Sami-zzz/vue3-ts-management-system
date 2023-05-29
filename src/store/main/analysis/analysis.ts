import { getAmountListRequest } from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountList: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: []
  }),
  actions: {
    async fetchAmountListAction() {
      const amountResult = await getAmountListRequest()
      this.amountList = amountResult.data
    }
  }
})

export default useAnalysisStore
