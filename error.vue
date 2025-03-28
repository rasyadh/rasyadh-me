<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-y-2">
    <NuxtImg
      :src="error.statusCode == 404 ? '/404.png' : '/error.png'"
      class="w-32 h-32 rounded-full"
      alt="Rasyadh Abdul Aziz"
      preload
    />
    <button
      class="text-sm text-gray-500 hover:underline flex items-center gap-x-2"
      @click="handleError"
    >
      <span class="align-middle">Back home</span>
      <Icon
        name="material-symbols:arrow-forward-rounded"
        class="text-base align-middle w-4 h-4"
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
