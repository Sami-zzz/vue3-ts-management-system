import {
  getEntireDepartmentsRequest,
  getEntireMenusRequest,
  getEntireRolesRequest
} from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
  entireMenu: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: [],
    entireMenu: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const rolesResult = await getEntireRolesRequest()
      const departmentsResult = await getEntireDepartmentsRequest()
      const menusResult = await getEntireMenusRequest()
      // 保存数据
      this.entireRoles = rolesResult.data.list
      this.entireDepartments = departmentsResult.data.list
      this.entireMenu = menusResult.data.list
    }
  }
})

export default useMainStore
