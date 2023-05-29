import {
  deleteUserByIdRequest,
  newUserRequest,
  editUserRequest,
  postUsersListRequest,
  postPageListRequest,
  deletePageByIdRequest,
  newPageRequest,
  editPageRequest
} from '@/service/main/system/system'
import { defineStore } from 'pinia'
import useMainStore from '../main'
import type { ISystemState } from './type'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,
    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    //用户增删改查
    async postUsersListAction(queryInfo: any) {
      const usersListResult = await postUsersListRequest(queryInfo)
      const { list, totalCount } = usersListResult.data
      this.usersList = list
      this.usersTotalCount = totalCount
    },
    async deleteUserByIdAction(id: number) {
      await deleteUserByIdRequest(id)
      console.log('删除成功')
      //刷新获取数据
      this.postUsersListAction({ offset: 0, size: 10 })
    },
    async newUserAction(userInfo: any) {
      await newUserRequest(userInfo)
      console.log('新建成功')
      //刷新获取数据
      this.postUsersListAction({ offset: 0, size: 10 })
    },
    async editUserAction(id: number, userInfo: any) {
      await editUserRequest(id, userInfo)
      console.log('更新成功')
      //刷新获取数据
      this.postUsersListAction({ offset: 0, size: 10 })
    },
    //page增删改查
    async postPageListAction(pageName: string, queryInfo: any) {
      const pageListResult = await postPageListRequest(pageName, queryInfo)
      console.log('查询成功')
      const { list, totalCount } = pageListResult.data
      this.pageList = list
      this.pageTotalCount = totalCount
    },
    async deletePageByIdAction(pageName: string, id: number) {
      await deletePageByIdRequest(pageName, id)
      console.log('删除成功')
      //刷新获取数据
      this.postPageListAction(pageName, { offset: 0, size: 10 })
      // 重新获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()
    },
    async newPageAction(pageName: string, pageInfo: any) {
      await newPageRequest(pageName, pageInfo)
      console.log('新建成功')
      //刷新获取数据
      this.postPageListAction(pageName, { offset: 0, size: 10 })
      // 获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()
    },
    async editPageAction(pageName: string, id: number, pageInfo: any) {
      await editPageRequest(pageName, id, pageInfo)
      console.log('更新成功')
      //刷新获取数据
      this.postPageListAction(pageName, { offset: 0, size: 10 })
      // 获取完整的数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()
    }
  }
})

export default useSystemStore
