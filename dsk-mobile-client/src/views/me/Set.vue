<template>
  <div>
    <van-nav-bar @click-left="$router.go(-1)" left-arrow title="系统设置" />
    <van-divider
  :style="{borderColor: '#d8d8d8' , padding: '0 16px'}"
>
</van-divider>

    <view @click="$router.push('/home/Safety')" class="rade">
        <p>账号与安全</p>
        <van-icon class="tubiao" name="arrow"/>
    </view>
    <view class="rade">
        <p>隐私设置</p>
        <van-icon class="tubiao" name="arrow"/>
    </view>
    <view class="rade">
        <p>阅读设置</p>
        <van-icon class="tubiao" name="arrow"/>
    </view>
    <view class="rade">
        <p>通知设置</p>
        <van-icon class="tubiao" name="arrow"/>
    </view>
    <view class="rade">
        <p>清除缓存</p>
        <van-icon class="tubiao" name="arrow"/>
    </view>
    <view class="rade">
        <p>关于我们</p>
        <van-icon class="tubiao" name="arrow"/>
    </view>

    <van-button class="btn" type="primary" block>退出登录</van-button>
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
.btn{
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  color: #f00;
  font-size: 18px;
  border: 1px solid #e5e5e5;
  margin-top: 15px;
}
</style>