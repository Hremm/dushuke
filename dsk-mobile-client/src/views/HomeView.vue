<template>
  <div>
    <!-- 二级路由占位符 -->
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>

    <!-- 底部选项卡 -->
    <van-tabbar 
    fixed placeholder
      v-model="active" 
      active-color="#1afa29"
      @change="tabChange">
      <van-tabbar-item name="/home/bookstore">
        <span>书城</span>
        <template #icon="props">
        <img v-show="!props.active" src="@/assets/tabs/bookstore_0.png" alt="">
          <img v-show="props.active" src="@/assets/tabs/bookstore_1.png" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="/home/classification">
        <span>分类</span>
        <template #icon="props">
          <img v-show="!props.active" src="@/assets/tabs/classification_0.png" alt="">
          <img v-show="props.active" src="@/assets/tabs/classification_1.png" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="/home/bookshelf">
        <span>书架</span>
        <template #icon="props">
          <img v-show="!props.active" src="@/assets/tabs/bookshelf_0.png" alt="">
          <img v-show="props.active" src="@/assets/tabs/bookshelf_1.png" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="/home/me">
        <span>我的</span>
        <template #icon="props">
          <img v-show="!props.active" src="@/assets/tabs/me_0.png" alt="">
          <img v-show="props.active" src="@/assets/tabs/me_1.png" alt="">
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()  // 获取路由管理器对象

// 底部选项卡相关业务
const active = ref('/home/bookstore')
const tabChange = function(bookstore:string){
  router.push(bookstore)
} 


</script> 