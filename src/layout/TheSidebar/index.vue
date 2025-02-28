<script setup lang="ts">
import { useSidebarFn } from '@/layout/TheSidebar/composable'
const { items } = useSidebarFn()
</script>
<template>
  <div class="h-full bg-slate-100 shadow">
    <div class="flex justify-center mt-5 mb-4">
      <span class="text-2xl font-semibold">CRM template</span>
    </div>

    <div>
      <router-link
        v-for="(item, index) in items"
        :key="index"
        :to="item.route"
        v-slot="{ isExactActive }"
        class="block cursor-pointer"
      >
        <div
          class="hover:bg-slate-300 px-7 py-3.5 flex items-center justify-start gap-4 select-none"
          :class="[isExactActive ? 'bg-slate-300' : '']"
        >
          <BaseIcon :name="item.icon" class="w-5 h-5 text-slate-600" />
          {{ item.label }}
        </div>
      </router-link>
    </div>
  </div>
</template>
