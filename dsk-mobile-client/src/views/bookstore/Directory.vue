<template>
    <div>
        <van-nav-bar
        fixed placeholder
  title="目录"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<!-- 目录列表 -->
<van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


// 引入目录列表
    const onClickLeft = () => history.back();
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);

    const onload = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };




</script>

<style scoped>

</style>