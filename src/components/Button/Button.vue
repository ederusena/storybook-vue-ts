<template>
  <button
    type="button"
    :class="size"
    class="
      inline-flex
      items-center
      border border-transparent
      text-xs
      font-medium
      rounded
      shadow-sm
      text-white
      bg-indigo-600
      hover:bg-indigo-700
      focus:outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    "
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator(value: string) {
      return ["small", "normal", "large"].includes(value);
    },
  },
  backgroundColor: {
    type: String,
  },
});
</script>

<style lang="css" scoped>
.small {
  @apply px-2.5 py-1.5;
}

.normal {
  @apply px-3 py-2;
}

.large {
  @apply px-4 py-2;
}
</style>
