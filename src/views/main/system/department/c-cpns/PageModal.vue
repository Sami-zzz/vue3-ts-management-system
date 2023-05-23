<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isEditRef ? '编辑部门' : '新建部门'"
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="formData.name" placeholder="请输入部门名" />
          </el-form-item>
          <el-form-item label="部门领导" prop="leader">
            <el-input v-model="formData.leader" placeholder="请输入部门领导" />
          </el-form-item>
          <el-form-item label="上级部门" prop="parentId">
            <el-select
              v-model="formData.parentId"
              placeholder="请选择部门"
              style="width: 100%"
            >
              <template v-for="item in entireDepartments" :key="item.id">
                <el-option :value="item.id" :label="item.name" />
              </template>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
const formData = reactive<any>({
  name: '',
  leader: '',
  parentId: ''
})

//获取部门列表
const mainStore = useMainStore()
const systemStore = useSystemStore()
const { entireDepartments } = storeToRefs(mainStore)

const dialogVisible = ref(false)
const isEditRef = ref(false)
const itemRef = ref()

//弹出框
const setModalVisible = (isEdit: boolean = false, itemData?: any) => {
  dialogVisible.value = true
  isEditRef.value = isEdit
  //编辑时
  if (isEdit && itemData) {
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    itemRef.value = itemData
  } else {
    //新建时
    for (const key in formData) {
      formData[key] = ''
    }
    itemRef.value = null
  }
}

const handleConfirmClick = () => {
  dialogVisible.value = false
  if (!isEditRef.value) {
    systemStore.newPageAction('department', formData)
  } else {
    systemStore.editPageAction('department', itemRef.value.id, formData)
  }
}

defineExpose({
  setModalVisible
})
</script>

<style lang="less" scoped></style>
