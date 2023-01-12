<template>
  <h1>Basic Calculator</h1>
  <div class="over800px">
    <div class="wrapper colorBG-black">
      <div class="output">
        <span class="outputString colorTXT-white">{{output == '' ? 0 : output}}</span>
      </div>
      <div class="buttonArea colorBG-black">
        <div @click="clearing" class="button actionButtons colorBG-grey colorTXT-black">AC</div>
        <div @click="changeSign" class="button actionButtons colorBG-orange colorTXT-white">+/-</div>
        <div @click="parsing" class="button actionButtons colorBG-orange colorTXT-white">/</div>
        <div @click="parsing" class="button actionButtons colorBG-orange colorTXT-white">*</div>
        <div @click="parsing" class="button numericButtons colorBG-darkgrey colorTXT-white">7</div>
        <div @click="parsing" class="button numericButtons colorBG-darkgrey colorTXT-white">8</div>
        <div @click="parsing" class="button numericButtons colorBG-darkgrey colorTXT-white">9</div>
        <div @click="parsing" class="button actionButtons colorBG-orange colorTXT-white">-</div>
        <div @click="parsing" class="button numericButtons colorBG-darkgrey colorTXT-white">4</div>
        <div @click="parsing" class="button numericButtons colorBG-darkgrey colorTXT-white">5</div>
        <div @click="parsing" class="button numericButtons colorBG-darkgrey colorTXT-white">6</div>
        <div @click="parsing" class="button actionButtons colorBG-orange colorTXT-white">+</div>
        <div @click="parsing" class="button numericButtons colorBG-darkgrey colorTXT-white">1</div>
        <div @click="parsing" class="button numericButtons colorBG-darkgrey colorTXT-white">2</div>
        <div @click="parsing" class="button numericButtons colorBG-darkgrey colorTXT-white">3</div>
        <div @click="calculate" class="twoSpace equalButton colorBG-orange colorTXT-white">=</div>
        <div @click="parsing" class="button numericButtons colorBG-darkgrey colorTXT-white">0</div>
        <div @click="parsing" class="button numericButtons colorBG-darkgrey colorTXT-white">.</div>
        <div @click="clearLast" class="button numericButtons del colorBG-orange colorTXT-white">DEL</div>
      </div>
    </div>
    <div class="history">
      <h3 v-if="history.length > 0" >Previous calculations: </h3>
      <ul class="history-list">
        <li class="history-list__item" v-for="calc in history" :key="calc">{{calc[0]}} = {{calc[1]}}</li>
      </ul>
    </div>
  </div>
  
</template>



<script setup>

import { ref } from 'vue'




let output = ref('')
let history = []

function parsing(Event) {
  let suffixes = [/[/+\-*.]$/];
  let regex = /[/+\-*.]$/
  let endsWithSuffix = suffixes.some(suffix => suffix.test(output.value.toString()));
  endsWithSuffix && Event.srcElement.innerText.match(regex) ? output.value = output.value.toString().slice(0, -1) + Event.srcElement.innerText : output.value += Event.srcElement.innerText

  if(output.value[0] == '0' || (output.value[0].match(regex))){
    output.value = ''
  }
}
const calculate =  () => {
    if(eval(output.value).length <= 10){
      history.push([output.value, eval(output.value)])
      output.value = eval(output.value)
    } else {
      history.push([output.value, eval(output.value)])
      output.value = eval(output.value).toString().slice(0,10)
    }
}



const clearing = () => output.value = ''
const clearLast = () => output.value = output.value.toString().slice(0, -1)
const changeSign = () => output.value = -output.value


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
   box-sizing: border-box;
}


.colorBG-grey{
  background: rgb(159,159,159);
}
.colorBG-orange{
  background: rgb(246,153,6);
}
.colorBG-darkgrey{
  background: rgb(49,49,49);
}
.colorBG-black{
  background: #000000;
}
.colorTXT-white{
  color: #ffffff;
}
.colorTXT-black{
  color:#000000;
}

.over800px{
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  gap: 10px;
}

.wrapper{
  border: 1px solid black;
  height: 100%;
  max-width: 500px;
  width: 60%;
  margin: 0 auto;
  border-radius: 0.8rem;
}

.output {
  width:100%;
  height: 60px;
  text-align: right;
  padding-top: 10px;
  padding-right: 10px;
  border-radius: 0.8rem;
}

.outputString {
  font-size: 2.6rem;
}

.buttonArea {
  display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 8px;
grid-row-gap: 8px;
padding: 1rem 1rem;
border-radius: 0.8rem;
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

.button:hover, .button:active {
  opacity: 0.7;
}


.twoSpace {
  grid-area: 4 / 4 / 6 / 5;
  border: 1px solid black;
  font-size: 2.4rem;
  display: flex;
  align-items:center;
  justify-content: center;
  border-radius: 1rem;
}

.twoSpace:hover {
  opacity: 0.8;
}

.history {
  width: 40%;
  text-align: left;
}

.history-list {
  list-style: none;
  padding: 0;
}

.history-list__item{
  font-size: 1.4rem;
  padding-bottom: 0.3rem;
  text-align: left;
}



@media (min-width: 350px) and (max-width: 800px){

  .over800px{
    display: flex;
    flex-flow: column;
  }

  .wrapper{
    border: 1px solid black;
    height: 100%;
    width: 300px;
    margin: 0 auto;
    border-radius: 0.8rem;
  }

  .history {
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;
  }

  .history-list__item{
    text-align: center;
  }

  .buttonArea {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  padding: 1rem 1rem;
  border-radius: 0.8rem;
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
