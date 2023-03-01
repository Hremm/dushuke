<template>
    <div>
      <div class="header">
        <img @click="$router.push('/home/Personal')"  src="../../assets/tabs/me_0.png" alt="">
        <div class="title">
          <p>用户名10293</p>
          <span @click="$router.push('/home/HeadPicture')">编辑个人资料</span>
        </div>
        <van-icon class="Sign in" name="calendar-o" size="32" />
      </div>
      
      <table>
        <thead>
          <td>10</td>
          <td>3</td>
          <td>1</td>
          <td>29h</td>
        </thead>
        <tbody>
          <td>阅读币</td>
          <td>笔记</td>
          <td>书单</td>
          <td>阅历</td>
        </tbody>
      </table>
      <view class="rade">
        <van-icon name="apps-o" size="20px" />
        <p>阅读偏好</p>
        <van-icon class="tubiao" name="arrow"/>
      </view>
      <view class="rade"  @click="$router.push('/home/FootPrint')">
        <van-icon name="underway-o" size="20px" />
        <p>我的足迹</p>
        <van-icon class="tubiao" name="arrow"/>
      </view>
      <view class="rade">
        <van-icon name="envelop-o" size="20px" />
        <p>消息通知</p>
        <van-icon class="tubiao" name="arrow"/>
      </view>
      <view class="rade" @click="$router.push('/home/Set')">
        <van-icon name="setting-o" size="20px" />
        <p>系统设置</p>
        <van-icon class="tubiao" name="arrow"/>
      </view>
      <view class="rade" @click="$router.push('/home/Opinion')">
        <van-icon name="records" size="20px" />
        <p>意见反馈</p>
        <van-icon class="tubiao" name="arrow"/>
      </view>
    </div>
  </template>
  
  <script setup lang="ts">
  
    // 绑定事件, 实现跳转
  </script>
  
  <style scoped>

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 5px 10px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  background-image: linear-gradient(#a7e8bf,#fff)
}
.header img {
  width:70px; 
  height:70px;
  border-radius: 50%;
}
.header .title{
  flex: 1;
  text-align: left;
  margin-left: 15px;
}
.header .title p {
  font-weight: bold;
  color: #000;
  font-size: 1.2em;
  margin: 5px 0;
}
.header .title span {
  font-size: 14px;
}
table {
  margin: 15px auto;
  width: 100%;
}
table>thead>td {
  width: 30px;
  height: 20px;
  font-weight: bold;
  color: #000;
  font-size: 1.2em;
}
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
.tubiao {
  margin-right: 5px;
}
  </style>