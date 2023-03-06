<template>
  <div class="bgco">
    <van-nav-bar fixed placeholder @click-left="$router.go(-1)" title="通知设置" left-text="返回" left-arrow>
    </van-nav-bar>

    <van-divider
  :style="{borderColor: '#d8d8d8' , padding: '0 16px'}"
></van-divider>

    <van-cell class="biao" title="接收消息通知">
      <van-switch v-model="checked"  />
    </van-cell>

    <van-cell class="biao" title="接收关注人信息提醒">
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

<style scoped>
.bgco {
  background-color: #e8eaed; 
}
</style>