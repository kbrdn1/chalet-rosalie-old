<script setup lang="ts">
// import { computed } from "vue";
import { ref, watchEffect, Component } from "vue";
import type { IconProps } from "@/types";
import * as icons from "lucide-vue-next";

const { name, size, color, strokeWidth, defaultClass } =
  defineProps<IconProps>();

// const icon = computed(() => icons[name as keyof typeof icons]);
const icon = ref<Component | null>(null);

watchEffect(() => {
  icon.value = icons[name as keyof typeof icons] as Component;
});
</script>

<template>
  <component
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>