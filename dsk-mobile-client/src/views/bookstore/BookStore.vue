<template>
    <div>
      <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"/>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <div class="er">
        <span class="c1">猜你喜欢</span>
      <button class="btn">更多 ></button>
      </div>
      <div class="book">
        <img src="../../assets/sspl.jpg">
        <p>生死疲劳</p>
        <p>莫言 | 现实</p>
        <p class="p1">西门闹继承家产而发迹，成了高密东北乡首富。娶妻白杏儿，无嗣；纳婢女迎春为二妾，蓝黛科技刚发来的舒服了肯定十分了解附近阿斯利康房间爱上了房间辣看手机福利卡时间分类洒进来客服</p>
      </div>
     <div class="content">
      <div>
        <img src="../../assets/sspl.jpg" style="width: 100px;" mode="widthFix">
        <img src="../../assets/sspl.jpg" style="width: 100px;" mode="widthFix">
        <img src="../../assets/sspl.jpg" style="width: 100px;" mode="widthFix">
      </div>
     </div>
     <van-divider :style="{ color: '#c1c1c1', borderColor: '#c1c1c1', padding: '0 16px' }"></van-divider>
      <van-divider :style="{ color: '#c1c1c1', borderColor: '#c1c1c1', padding: '0 16px' }"></van-divider>
      <div class="er">
        <span class="c1">本周推荐</span>
      <button class="btn">更多 ></button>
      </div>
      <div>
        <img src="../../assets/img/dp.png" style="width: 100px;" mode="widthFix">
        <img src="../../assets/img/dp.png" style="width: 100px;" mode="widthFix">
        <img src="../../assets/img/dp.png" style="width: 100px;" mode="widthFix">
      </div>
      <div>
        <img src="../../assets/img/dp.png" style="width: 100px;" mode="widthFix">
        <img src="../../assets/img/dp.png" style="width: 100px;" mode="widthFix">
        <img src="../../assets/img/dp.png" style="width: 100px;" mode="widthFix">
      </div>
      <van-divider :style="{ color: '#c1c1c1', borderColor: '#c1c1c1', padding: '0 16px' }"></van-divider>
      <van-divider :style="{ color: '#c1c1c1', borderColor: '#c1c1c1', padding: '0 16px' }"></van-divider>
      <div class="er">
        <span class="c1">更多推荐</span>
      <button class="btn">更多 ></button>
      </div>
      <div class="book">
        <img src="../../assets/img/dp.png" mode="widthFix">
        <p>斗破苍穹</p>
        <p>天蚕土豆 | 玄幻</p>
        <p class="p1">三十年河东，三十年河西，莫欺少年穷！ 年仅15岁的萧家废物，于此地，立下了誓言，从今以后便一步步走向斗气大陆巅峰！</p>
      </div>
      <div class="book">
        <img src="../../assets/img/dp.png" mode="widthFix">
        <p>斗破苍穹</p>
        <p>天蚕土豆 | 玄幻</p>
        <p class="p1">三十年河东，三十年河西，莫欺少年穷！ 年仅15岁的萧家废物，于此地，立下了誓言，从今以后便一步步走向斗气大陆巅峰！</p>
      </div>
      <div class="book">
        <img src="../../assets/img/dp.png" mode="widthFix">
        <p>斗破苍穹</p>
        <p>天蚕土豆 | 玄幻</p>
        <p class="p1">三十年河东，三十年河西，莫欺少年穷！ 年仅15岁的萧家废物，于此地，立下了誓言，从今以后便一步步走向斗气大陆巅峰！</p>
      </div>
      <div class="h1"></div>
    </div>

    
  </template>
  
  <script setup lang="ts">

  </script>
  
  <style scoped>
    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .c1 {
    margin-left: 20px;
    font-size: 25px;
    float: left;
    font-weight: 500;
    color: #333333;
  }
  .btn{
    background-color: #f9f9f9;
    border: 1px solid #f9f9f9;
    float: right;
    color: #999999;
    margin-right: 25px;
  }
  .er{
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  img{
    width: 30%;
    height: 140px;
    float: left;
    margin-left: 20px;
    border-radius: 5px;
  }
  p{
    display: flex;
    margin-left: 140px;
  }
  .book{
    width: 375px;
    height: 140px; 
  }
  .p1{
    width: 60%;
    height: 60px;
    overflow: hidden;
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 3 ;
    -webkit-box-orient: vertical;
  }
  .content{
    width: 375px;
    height: 112.5px;
    margin-top: 10px;
  }
  .h1{
    height: 50px;
  }
  </style>