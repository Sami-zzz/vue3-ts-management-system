import { ref } from 'vue'
import type PageModal from '@/components/pageModal/PageModal.vue'

export default function usePageModal() {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewClick() {
    modalRef.value?.setModalVisible()
  }
  function handleEditClick(itemData: any) {
    modalRef.value?.setModalVisible(true, itemData)
  }
  return {
    modalRef,
    handleEditClick,
    handleNewClick
  }
}
