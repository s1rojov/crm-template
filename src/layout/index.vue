<template>
  <div class="w-screen h-screen overflow-hidden bg-slate-50">
    <template class="flex justify-items-start h-full w-full">
      <TheSidebar class="w-1/5 xl:w-[18%]" />
      <div class="w-4/5 xl:w-[82%]">
        <TheHeader />
        <RouterView class="p-5" />
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import TheSidebar from '@/layout/TheSidebar/index.vue'
import TheHeader from '@/layout/TheHeader/index.vue'
</script>
