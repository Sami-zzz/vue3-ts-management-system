import {
  deleteUserByIdRequest,
  newUserRequest,
  editUserRequest,
  postUsersListRequest
} from '@/service/main/system/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0
  }),
  actions: {
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
    }
  }
})

export default useSystemStore
