<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="
        isEditRef ? modalConfig.header.editTitle : modalConfig.header.newTitle
      "
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <template v-for="item in modalConfig.formItems" :key="item.prop">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </template>
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
import useSystemStore from '@/store/main/system/system'
import { ref, reactive } from 'vue'

interface IProps {
  modalConfig: {
    pageName: string
    header: {
      newTitle: string
      editTitle: string
    }
    formItems: any[]
  }
}
//初始化表单
const props = defineProps<IProps>()
const initialData: any = {}
for (const item of props.modalConfig.formItems) {
  initialData[item.prop] = item.initialValue ?? ''
}

const formData = reactive<any>(initialData)

const systemStore = useSystemStore()
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
    systemStore.newPageAction(props.modalConfig.pageName, formData)
  } else {
    systemStore.editPageAction(
      props.modalConfig.pageName,
      itemRef.value.id,
      formData
    )
  }
}

defineExpose({
  setModalVisible
})
</script>

<style lang="less" scoped></style>
