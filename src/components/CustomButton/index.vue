<template>
  <q-btn :color="color" :text-color="textColor" :label="label" />
</template>
<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  textColor: {
    type: String,
    default: 'white',
  },
  label: {
    type: String,
    default: 'Click',
  },
})
</script>
