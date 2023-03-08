<template>
    <div>
      <van-nav-bar title="题材" />
      <div class="div">
        <div class="div-left" @click="$router.push('/home/more')">
          <span>人物传记</span>
          <img src="../../assets/img/dp.png">
        </div>
        <div class="div-right">
          <span>网络小说</span>
          <img src="../../assets/img/dp.png" alt="">
        </div>
      </div>
      <div class="div">
        <div class="div-left">
          <span>人物传记</span>
          <img src="../../assets/img/dp.png">
        </div>
        <div class="div-right">
          <span>网络小说</span>
          <img src="../../assets/img/dp.png" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import { createApp } from 'vue';
import { NavBar } from 'vant';

const app = createApp();
app.use(NavBar);


  </script>
  
  <style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  .div{
    display: flex;
  }
.div-left{
  display: flex;
  width: 40%;
  height: 80px;
  background-color: #f5f7f9;
  border-radius: 10px;
  margin-left: 5%;
  margin-top: 5%;
}
span{
  line-height: 80px;
}
.div-right{
  display: flex;
  width: 40%;
  height: 80px;
  background-color: #f5f7f9;
  border-radius: 10px;
  margin-left: 10%;
  margin-top: 5%;

}
  </style>