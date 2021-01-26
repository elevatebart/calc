<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>
