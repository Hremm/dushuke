<template>
  <div>
    <van-nav-bar @click-left="$router.go(-1)" left-arrow title="账号与安全" />
    <van-divider
  :style="{borderColor: '#d8d8d8' , padding: '0 16px'}"
>
</van-divider>

    <view class="rade">
        <p>绑定手机号</p>
        <span class="phone">188****9999</span>
        <span>已绑定</span>
    </view>
    <view class="rade">
        <p>修改密码</p>
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
  justify-content: space-around;
  margin: 0 20px;
}
.rade p {
  flex: 1;
  text-align: left;
  margin-left: 10px;
}
</style>