<template>
  <h1>Basic Calculator</h1>
  <div class="wrapper">
    <div class="output">
      <span class="outputString">{{output == '' ? 0 : output}}</span>
    </div>
    <div class="buttonArea">
      <div @click="clearing" class="button actionButtons">C</div>
      <div @click="changeSign" class="button actionButtons">+/-</div>
      <div @click="parsing" class="button actionButtons manipulateButtons">/</div>
      <div @click="parsing" class="button actionButtons manipulateButtons">*</div>
      <div @click="parsing" class="button numericButtons">7</div>
      <div @click="parsing" class="button numericButtons">8</div>
      <div @click="parsing" class="button numericButtons">9</div>
      <div @click="parsing" class="button actionButtons manipulateButtons">-</div>
      <div @click="parsing" class="button numericButtons">4</div>
      <div @click="parsing" class="button numericButtons">5</div>
      <div @click="parsing" class="button numericButtons">6</div>
      <div @click="parsing" class="button actionButtons manipulateButtons">+</div>
      <div @click="parsing" class="button numericButtons">1</div>
      <div @click="parsing" class="button numericButtons">2</div>
      <div @click="parsing" class="button numericButtons">3</div>
      <div @click="calculate" class="twoSpace equalButton">=</div>
      <div @click="parsing" class="button numericButtons">0</div>
      <div @click="parsing" class="button numericButtons">.</div>
      <div @click="clearLast" class="button numericButtons del">DEL</div>
    </div>
  </div>
</template>



<script setup>

import { ref } from 'vue'

let output = ref('')

function parsing(Event) {
  let suffixes = [/[/+\-*.]$/];
  let regex = /[/+\-*.]$/
  let endsWithSuffix = suffixes.some(suffix => suffix.test(output.value.toString()));
  endsWithSuffix && Event.srcElement.innerText.match(regex) ? output.value = output.value.toString().slice(0, -1) + Event.srcElement.innerText : output.value += Event.srcElement.innerText

  if(output.value[0] == '0' || (output.value[0].match(regex))){
    output.value = ''
  }
}
const calculate =  () => output.value.length <= 1 ? output.value = '' : output.value = eval(output.value)
const clearing = () => output.value = ''
const clearLast = () => output.value = output.value.toString().slice(0, -1)
const changeSign = () => output.value = -output.value

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
   box-sizing: border-box;
}

.wrapper{
  border: 1px solid black;
  height: 100%;
  width: 600px;
  background: rgb(55, 55 ,55);
  margin: 0 auto;
  border-radius: 0.8rem;
}

.output {
  width:100%;
  height: 60px;
  background: rgb(242, 243, 233);
  text-align: right;
  padding-top: 10px;
  padding-right: 10px;
  border-radius: 0.8rem;
}

.outputString {
  font-size: 2.2rem;
}

.buttonArea {
  display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 8px;
grid-row-gap: 8px;
padding: 1rem 1rem;
}

.button{
  border: 1px solid black;
  font-size: 2.4rem;
  min-height: 70px;
  min-width: 100px;
  display: flex;
  align-items:center;
  justify-content: center;
  border-radius: 1rem;
}

.button:hover, .button:active, .button:click {
  opacity: 0.8;
}

.actionButtons {
  background: rgb(119, 99, 90);
  color: white;
}

.numericButtons {
  background: rgb(25,25,25);
  color: white;
}

.twoSpace {
  grid-area: 4 / 4 / 6 / 5;
  border: 1px solid black;
  font-size: 2.4rem;
  display: flex;
  align-items:center;
  justify-content: center;
  background: rgb(233, 105, 18);
  color: white;
  border-radius: 1rem;
}

.twoSpace:hover {
  opacity: 0.8;
}

@media (min-width: 350px) and (max-width: 800px){
  .wrapper{
    border: 1px solid black;
    height: 100%;
    width: 300px;
    background: rgb(55, 55 ,55);
    margin: 0 auto;
    border-radius: 0.8rem;
  }

  .buttonArea {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  padding: 1rem 1rem;
  }
  
  .button{
    border: 1px solid black;
    font-size: 2.4rem;
    min-height: 30px;
    min-width: 60px;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius: 1rem;
  }

  .del{
    font-size: 1.7rem;
  }
}

</style>
