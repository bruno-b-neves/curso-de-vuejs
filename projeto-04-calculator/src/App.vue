<template>
  <div id="app">
    <h1>Calculadora</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from './main/Calculator.vue'

export default {
  components: { Calculator }
  
}

</script>

<style>
  @font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-VariableFont_wght.ttf");
  }

  * {
    font-family: "RobotoMono", monospace;
  }

  body {
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    background: linear-gradient(to right, rgb(03, 105, 118), rgb(41, 46, 73));
  }
</style>