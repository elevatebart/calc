<template>
  <div class="container">
    <CalcDisplay>
      {{ result }}
    </CalcDisplay>
    <div class="keyboard">
      <div class="misc">
        <CalcButton variant="dark">AC</CalcButton>
        <CalcButton variant="dark">+/-</CalcButton>
        <CalcButton variant="dark">%</CalcButton>
      </div>
      <div class="operators">
        <CalcButton variant="operator">÷</CalcButton>
        <CalcButton variant="operator">x</CalcButton>
        <CalcButton variant="operator">-</CalcButton>
        <CalcButton variant="operator">+</CalcButton>
        <CalcButton variant="operator">=</CalcButton>
      </div>
      <div class="numbers">
        <CalcButton v-for="i of numbers" :key="i">
          {{ i.toString() }}
        </CalcButton>
        <CalcButton>.</CalcButton>
        <CalcButton variant="wide">0</CalcButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CalcDisplay from "./components/Display.vue";
import CalcButton from "./components/Button.vue";

export default defineComponent({
  name: "App",
  components: {
    CalcDisplay,
    CalcButton,
  },
  setup() {
    const result = ref(0);
    const numbers = ref([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    return {
      result,
      numbers,
    };
  },
});
</script>

<style scoped>
.container {
  width: 280px;
  margin: auto;
  background: #111;
}
.keyboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.misc {
  grid-area: 1 / 1 / 2 / 4;
}
.operators {
  grid-row: 1 / 6;
}
.numbers {
  grid-column: 1/4;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
}
</style>
