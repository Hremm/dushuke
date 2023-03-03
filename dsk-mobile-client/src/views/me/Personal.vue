<template>
  <div>
    <van-nav-bar class="nav" @click-left="$router.go(-1)" left-arrow size:50px/>
    <van-divider
  :style="{borderColor: '#d8d8d8' , padding: '0 16px'}"
>
  </van-divider>

  <van-image
  style="box-shadow:0px 1px 10px #333;"
  radius="5px"
  width="15vh"
  height="15vh"
  fit="cover"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>

  <view>
    <h3>西瓜</h3>
    <span style=" color: #999;">好好学习，天天向上</span>
  </view>


  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.nav {
  --van-nav-bar-arrow-size:	25px;
  --van-nav-bar-icon-color:	#999;
}
</style>