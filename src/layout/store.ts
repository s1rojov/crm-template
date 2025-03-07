import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const isMinimize = ref<boolean>(false)
  function toggleSidebar() {
    isMinimize.value = !isMinimize.value
  }
  return { toggleSidebar, isMinimize }
})
