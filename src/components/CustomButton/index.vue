<template>
  <q-btn :color="color" :text-color="textColor" label="Standard" />
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
})
</script>
