<template>
  <div id="bgco">
    <van-nav-bar fixed placeholder @click-left="$router.go(-1)" title="隐私设置" left-text="返回" left-arrow>
    </van-nav-bar>

    <van-divider
  :style="{borderColor: '#d8d8d8' , padding: '0 16px'}"
></van-divider>

    <van-cell class="biao" title="不让别人看我读过的书">
      <van-switch v-model="checked"  />
    </van-cell>

    <van-cell class="biao" title="不让别人看我的动态">
      <van-switch v-model="checked"  />
    </van-cell>

    <van-cell style="margin-bottom:10px;" class="biao" title="不让别人看我的书单">
      <van-switch v-model="checked"  />
    </van-cell>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showConfirmDialog } from 'vant';
  const checked = ref(true);
  const onUpdateValue = (newValue) => {
    showConfirmDialog({
      title: '提醒',
      message: '是否切换开关？',
    }).then(() => {
      checked.value = newValue;
    });
  };


</script>

<style>

 body{
   height: 100vh;
   background-color: #ece9e9; 
  }
.biao {
  margin-top: 10px;
  
}
template{
  height: 100vh;
}
</style>