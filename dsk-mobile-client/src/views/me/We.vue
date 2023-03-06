<template>
  <div>
    <van-nav-bar @click-left="$router.go(-1)" left-arrow title="关于我们" />

<van-image
style="padding-top:35px;"
  radius="5px"
  width="15vh"
  height="15vh"
  fit="cover"
  src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
/>
    <p>读书客</p>

    <view @click="$router.push('/home/Agreement')" class="rade">
        <p>用户协议</p>
        <van-icon class="tubiao" name="arrow"/>
    </view>
    <view @click="$router.push('/home/Agreement')"  class="rade">
        <p>隐私政策</p>
        <van-icon class="tubiao" name="arrow"/>
    </view>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.rade {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
}
.rade p {
  flex: 1;
  text-align: left;
  margin-left: 10px;
}
</style>