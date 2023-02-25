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
      v-model="active" 
      active-color="#f03d37"
      @change="tabChange">
      <van-tabbar-item name="/home/bookstore">
        <span>书城</span>
        <template #icon="props">
          <img :src="require(
            `@/assets/tabs/index_${props.active?1:0 }.png`)" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="/home/classification">
        <span>分类</span>
        <template #icon="props">
          <img v-show="!props.active" src="@/assets/tabs/xx.png" alt="">
          <img v-show="props.active" src="@/assets/tabs/xx.png" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="/home/bookshelf">
        <span>书架</span>
        <template #icon="props">
          <img v-show="!props.active" src="@/assets/tabs/xx.png" alt="">
          <img v-show="props.active" src="@/assets/tabs/xx.png" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="/home/me">
        <span>我的</span>
        <template #icon="props">
          <img v-show="!props.active" src="@/assets/tabs/xx.png" alt="">
          <img v-show="props.active" src="@/assets/tabs/xx.png" alt="">
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
const active = ref('/home/index')
const tabChange = function(index:string){
  router.push(index)
}

</script> 