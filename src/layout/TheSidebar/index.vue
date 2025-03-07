<script setup lang="ts">
import { useSidebarFn } from '@/layout/TheSidebar/composable'
import { useSidebarStore } from '@/layout/store'
import { storeToRefs } from 'pinia'
const store = useSidebarStore()
const { items } = useSidebarFn()
const { isMinimize } = storeToRefs(store)
const { toggleSidebar } = store
</script>
<template>
  <div class="h-full bg-slate-100 shadow">
    <div class="flex justify-between pl-7 pr-5 items-center mt-5 mb-4">
      <router-link to="/" v-if="isMinimize">
        <span class="text-2xl select-none cursor-pointer font-semibold">CRM template</span>
      </router-link>
      <div class="" @click="toggleSidebar">
        <BaseIcon
          name="double-right"
          class="w-6 h-6 cursor-pointer"
          :class="[isMinimize ? 'rotate-90' : '']"
        />
      </div>
    </div>

    <div class="mt-10">
      <router-link
        v-for="item in items"
        :key="item.route"
        :to="item.route"
        v-slot="{ isExactActive }"
        class="block cursor-pointer h-10"
      >
        <div
          class="hover:bg-slate-300 px-7 py-3.5 flex items-center justify-start gap-4 select-none"
          :class="[isExactActive ? 'bg-slate-300' : '']"
        >
          <BaseIcon :name="item.icon" class="w-5 h-5 text-slate-600" />
          <span v-if="isMinimize">{{ item.label }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
