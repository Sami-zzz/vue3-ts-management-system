import { ref } from 'vue'
import type PageModal from '@/components/pageModal/PageModal.vue'

type CallbackFnType = (data?: any) => void

export default function usePageModal(
  newCallback?: CallbackFnType,
  editCallback?: CallbackFnType
) {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewClick() {
    modalRef.value?.setModalVisible()
    if (newCallback) newCallback()
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
