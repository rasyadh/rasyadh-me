<template>
  <div
    v-if="visible"
    v-motion
    :initial="initial"
    :enter="enter"
    :transition="transition"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  delay: { type: Number, default: 0 },
  initial: { type: Object, default: () => ({ opacity: 0, y: 20 }) },
  enter: { type: Object, default: () => ({ opacity: 1, y: 0 }) },
  transition: {
    type: Object,
    default: () => ({ duration: 0.4, ease: "easeOut" }),
  },
});

const visible = ref(false);

onMounted(() => {
  setTimeout(() => {
    visible.value = true;
  }, props.delay);
});
</script>
