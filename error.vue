<script setup lang="ts">
import type { ErrorType } from './utils/types';
const props = defineProps({
  error: Object
})

const errObj = props.error as ErrorType;

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex flex-col w-[100%] h-[100vh] justify-center items-center bg-gray-800">
    <h2 class="text-5xl text-lime-500">{{ errObj.statusCode }}</h2>
    <p class="text-red-200 text-2xl my-4">{{ errObj.statusMessage }}</p>
    <button class="bg-purple-400 p-4 rounded text-white outline-2 outline-gray-700" @click="handleError">Clear errors</button>
  </div>
</template>
