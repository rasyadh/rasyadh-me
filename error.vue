<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <img
      :src="error.statusCode == 404 ? '/404.png' : '/error.png'"
      class="w-32 h-32 rounded-full motion-safe:animate-bounce"
      alt="Rasyadh Abdul Aziz"
    >
    <button
      class="text-sm text-gray-500 hover:underline hover:decoration-blue-700 flex items-center gap-x-2"
      @click="handleError"
    >
      <span class="align-middle">Back home</span>
      <Icon
        name="material-symbols:arrow-forward-rounded"
        class="text-base align-middle w-4 h-4 hover:text-blue-500"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

const handleError = () => clearError({ redirect: "/" });
</script>
