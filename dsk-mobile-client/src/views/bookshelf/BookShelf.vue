<template>
    <div>
      <van-nav-bar>
        <template #left>
          <h3>书架</h3>
        </template>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>

      <van-divider
  :style="{borderColor: '#d8d8d8' , padding: '0 16px'}"
>
</van-divider>

  <!-- 图书列表 -->
<van-pull-refresh >
      <van-list class="tushulie">
        
        <book-item class="tushu">
          <img src="../../assets/sspl.jpg" alt="">
          <p>生死疲劳</p>
          <span>已读1.6%</span>
        </book-item>

        <book-item class="tushu">
          <img src="../../assets/sspl.jpg" alt="">
          <p>生死疲劳</p>
          <span>已读1.6%</span>
        </book-item>

        <book-item class="tushu">
          <img src="../../assets/sspl.jpg" alt="">
          <p>生死疲劳</p>
          <span>已读1.6%</span>
        </book-item>

        <book-item class="tushu">
          <img src="../../assets/sspl.jpg" alt="">
          <p>生死疲劳</p>
          <span>已读1.6%</span>
        </book-item>
        
        <book-item class="tushu">
          <img src="../../assets/sspl.jpg" alt="">
          <p>生死疲劳</p>
          <span>已读1.6%</span>
        </book-item>

        <book-item class="tushu">
          <img src="../../assets/sspl.jpg" alt="">
          <p>生死疲劳</p>
          <span>已读1.6%</span>
        </book-item>
        

      </van-list>
    </van-pull-refresh>
    </div>
  </template>
  
  <script setup lang="ts">
import { showToast } from 'vant';

  </script>
  
  <style scoped>
    .tushulie {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .tushulie .tushu p{
      margin-top: 10px;
      margin-bottom:5px;
      text-align: start;
    }
    .tushulie .tushu span{
      color:#999; 
      font-size:12px;
      text-align: start;
      
    }
    .tushulie .tushu img {
      width:100px; 
      height:140px;
      border-radius: 5px;
    }
    .tushulie .tushu{
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      margin:5px 15px ;
    }
  </style>