<template>
  <div class="bgco">
    <van-nav-bar fixed placeholder @click-left="$router.go(-1)" title="隐私设置" left-text="返回" left-arrow>
    </van-nav-bar>

    <van-divider
  :style="{borderColor: '#d8d8d8' , padding: '0 16px'}"
></van-divider>

    <van-cell class="biao" title="不让别人看我读过的书">
        <van-switch/>
    </van-cell>

    <van-cell class="biao" title="不让别人看我的动态">
        <van-switch/>
    </van-cell>

    <van-cell style="margin-bottom:10px;" class="biao" title="不让别人看我的书单">
        <van-switch/>
    </van-cell>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bgco {
  background-color: #e8eaed; 
  z-index: 999;
}
.biao {
  margin-top: 10px;

}
</style>