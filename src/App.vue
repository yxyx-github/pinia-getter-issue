<template>
    Return value of the getter: {{ store.demoGetter }}
</template>

<script setup lang="ts">
import { useStore } from '@/stores/demo-store'

const store = useStore()
console.log(store.demoGetter)
</script>

<style scoped>
</style>
