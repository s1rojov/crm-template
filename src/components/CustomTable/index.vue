<template>
  <div>
    <q-table flat bordered title="Treats" :rows="items" :columns="fields" row-key="name" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  fields: {
    type: Array as any,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
})
</script>
