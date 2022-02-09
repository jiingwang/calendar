<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { Calendar, DatePicker } from 'v-calendar';
import dayjs from 'dayjs'
import { reactive, ref } from 'vue'
const attributes = reactive([
  {
    highlight: {
      color: 'purple',
      fillMode: 'outline',
    },
    dates: {
      start: new Date('1/29/2022'),
      dailyInterval: 3
    }
  },
  {
    highlight: {
      color: 'red',
      fillMode: 'solid',
    },
    dates: new Date()
  }
])
console.log(dayjs)
let time = ref(dayjs().format('YYYY-MM-DD HH:mm:ss') )
setInterval(() => {
  time.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
})
</script>

<template>
  <p class="title">Jie's Schedule</p>
  <Calendar is-expanded :attributes="attributes"/>
  <div class="time">
    <div class="head">北京时间: </div>
    <div class="content">{{time}}</div>
  </div>
  <div class="description">
    <p class="description-title">注释</p>
    <div class="description-content">
      <div class="description-item">
        <div class="cicle outline purple"></div>
        上班
      </div>
      <div class="description-item">
        <div class="cicle fill red"></div>
        今天
      </div>
    </div>
  </div>
  
</template>

<style>
.title {
  display: block;
  margin-bottom: 20px;
  text-align: center;
}
.description {
  padding: 10px;
}
.description-title {
  margin: 0;
  line-height: 32px;
  color: #999;
}
.description-content .description-item {
  display: flex;
  flex-flow: row nowrap;
}
.description-item .cicle {
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  margin-right: 6px;
  margin-bottom: 10px;
}
.cicle.outline.purple {
  border: 2px solid #44337a;
}
.cicle.fill.red {
  background-color:  #e53e3e;
}
.time {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.time .head {
  margin-right: 8px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
