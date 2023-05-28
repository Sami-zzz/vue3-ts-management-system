import { ref } from 'vue'
import type PageModal from '@/components/pageModal/PageModal.vue'

type EditCallbackFnType = (data: any) => void

export default function usePageModal(editCallback?: EditCallbackFnType) {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewClick() {
    modalRef.value?.setModalVisible()
  }
  function handleEditClick(itemData: any) {
    modalRef.value?.setModalVisible(true, itemData)
    //回调函数中拿到itemData
    if (editCallback) editCallback(itemData)
  }
  return {
    modalRef,
    handleEditClick,
    handleNewClick
  }
}
