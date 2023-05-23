import {
  getEntireDepartmentsRequest,
  getEntireRolesRequest
} from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const rolesResult = await getEntireRolesRequest()
      const departmentsResult = await getEntireDepartmentsRequest()
      // 保存数据
      this.entireRoles = rolesResult.data.list
      this.entireDepartments = departmentsResult.data.list
    }
  }
})

export default useMainStore
