<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: null,
      validator: (val: string) => ["wide", "operator", "dark"].includes(val),
    },
  },
});
</script>

<template>
  <button @click="$emit('click')" :class="variant">
    <slot />
  </button>
</template>

<style scoped>
button {
  width: 70px;
  height: 50px;
  background: #5d5e5e;
  color: #fff;
  font-size: 1.5em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  -webkit-appearance: none;
  border: 1px solid #333;
}

.operator {
  background: #ff9d00;
}

.dark {
  background: #242424;
}

.wide {
  width: 140px;
}
</style>
