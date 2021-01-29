<template>
  <CalcContainer class="container">
    <CalcDisplay> {{ negative ? "-" : "" }}{{ result }} </CalcDisplay>
    <div class="keyboard">
      <div class="misc">
        <CalcButton variant="dark" value="AC" @click="reset" />
        <CalcButton variant="dark" value="+/-" @click="handleNegative" />
        <CalcButton variant="dark" value="%" />
      </div>
      <div class="operators">
        <CalcButton variant="operator" value="÷" @click="handleOperator" />
        <CalcButton variant="operator" value="x" @click="handleOperator" />
        <CalcButton variant="operator" value="-" @click="handleOperator" />
        <CalcButton variant="operator" value="+" @click="handleOperator" />
        <CalcButton variant="operator" value="=" @click="handleEqual" />
      </div>
      <div class="numbers">
        <CalcButton
          v-for="i of numbers"
          :key="i"
          @click="handleNumber"
          :value="i.toString()"
        />
        <CalcButton value="." />
        <CalcButton variant="wide" value="0" @click="handleNumber" />
      </div>
    </div>
  </CalcContainer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CalcContainer from "./components/Container.vue";
import CalcDisplay from "./components/Display.vue";
import CalcButton from "./components/Button.vue";

export default defineComponent({
  name: "App",
  components: {
    CalcContainer,
    CalcDisplay,
    CalcButton,
  },
  setup() {
    const result = ref("0");
    const negative = ref(false);
    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    let currentNumber = "";
    let operator = "";
    let firstOperand = 0;

    function getCurrentNumber(): number {
      const sign = negative.value ? -1 : 1;
      negative.value = false;
      return sign * parseInt(currentNumber, 10);
    }

    function calculate(): number {
      switch (operator) {
        case "+":
          return firstOperand + getCurrentNumber();
        case "-":
          return firstOperand - getCurrentNumber();
        case "x":
          return firstOperand * getCurrentNumber();
        case "÷":
          return firstOperand / getCurrentNumber();
        default:
          return 0;
      }
    }

    function handleNumber(digit: number) {
      currentNumber += digit.toString();
      result.value = currentNumber;
    }

    function handleOperator(_operator: string) {
      // if operator already set, calculate and save the currentValue
      if (operator.length) {
        firstOperand = calculate();
      }
      if (!firstOperand) {
        firstOperand = getCurrentNumber();
      }
      currentNumber = "";
      operator = _operator;
    }

    function handleNegative() {
      negative.value = !negative.value;
    }

    function handleEqual() {
      firstOperand = calculate();
      operator = "";
      result.value = firstOperand.toString();
    }

    function reset() {
      currentNumber = "";
      operator = "";
      firstOperand = 0;
      negative.value = false;
      handleEqual();
    }

    return {
      result,
      numbers,
      handleNumber,
      handleEqual,
      handleOperator,
      handleNegative,
      reset,
      negative,
      firstOperand,
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
