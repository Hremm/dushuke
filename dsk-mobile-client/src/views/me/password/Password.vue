<template>
  <div>
    <van-nav-bar class="nav" title="修改密码" @click-left="onClickLeft" left-arrow size:50px/>
    <van-divider
  :style="{borderColor: '#d8d8d8' , padding: '0 16px'}"
>
  </van-divider>

    <input type="password" placeholder="请输入旧密码">
    <input type="password" placeholder="请输入新密码">

    <van-button style="width:90%;margin-top:50px;" type="primary" size="large">确定</van-button>
  </div>
</template>

<script setup lang="ts">
const onClickLeft = () => history.back();
</script>

<style scoped lang="scss">
.nav {
  --van-nav-bar-arrow-size:	20px;
  --van-nav-bar-icon-color:	#999;
  --van-nav-bar-title-font-size: 16px;
}
input {
  height: 30px;
  width: 100%;
  font-size: 16px;
  color: #999;
  padding: 0 20px;
  border: 2px solid transparent;
  margin-top:10px;
}
  input .active{
    border:2px solid #999;
  }

</style>