<template>
  <div class="w-screen h-screen overflow-hidden bg-slate-50">
    <div class="flex justify-items-start h-full w-full">
      <!-- Sidebar transition -->
      <transition name="sidebar">
        <TheSidebar
          class="transition-all duration-300"
          :class="[!isMinimize ? 'w-[4%]' : 'w-1/5 xl:w-[18%]']"
        />
      </transition>

      <!-- Main content transition -->
      <transition name="content">
        <div
          class="transition-all duration-300"
          :class="[!isMinimize ? 'w-[96%]' : 'w-4/5 xl:w-[82%]']"
        >
          <TheHeader />
          <RouterView class="p-5" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheSidebar from '@/layout/TheSidebar/index.vue'
import TheHeader from '@/layout/TheHeader/index.vue'
import { storeToRefs } from 'pinia'
import { useSidebarStore } from '@/layout/store'

const store = useSidebarStore()
const { isMinimize } = storeToRefs(store)
</script>

<style>
/* Sidebar animatsiyasi */
.sidebar-enter-active,
.sidebar-leave-active {
  transition: width 0.3s ease-in-out;
}
.sidebar-enter-from,
.sidebar-leave-to {
  width: 4%;
}

/* Content animatsiyasi */
.content-enter-active,
.content-leave-active {
  transition: width 0.3s ease-in-out;
}
.content-enter-from,
.content-leave-to {
  width: 96%;
}
</style>
