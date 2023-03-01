<template>
  <div class="bgco">
    <van-nav-bar @click-left="$router.go(-1)" title="我的足迹" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>

<van-divider
  :style="{borderColor: '#d8d8d8' , padding: '0 16px'}"
>
</van-divider>
    <div class="lie">
      <img src="../../assets/img/book.jpg" alt="">
      <div class="infor">
        <span>浮</span>
        <p>曹雪芹</p>
      </div>
    </div>

    <div class="lie">
      <img src="../../assets/img/book.jpg" alt="">
      <div class="infor">
        <span>浮</span>
        <p>曹雪芹</p>
      </div>
    </div>

    <div class="lie">
      <img src="../../assets/img/book.jpg" alt="">
      <div class="infor">
        <span>浮</span>
        <p>曹雪芹</p>
      </div>
    </div>

    <div class="lie">
      <img src="../../assets/img/book.jpg" alt="">
      <div class="infor">
        <span>浮</span>
        <p>曹雪芹</p>
      </div>
    </div>

    <div class="lie">
      <img src="../../assets/img/book.jpg" alt="">
      <div class="infor">
        <span>浮</span>
        <p>曹雪芹</p>
      </div>
    </div>

    <div class="lie">
      <img src="../../assets/img/book.jpg" alt="">
      <div class="infor">
        <span>浮</span>
        <p>曹雪芹</p>
      </div>
    </div>

    <div class="lie">
      <img src="../../assets/img/book.jpg" alt="">
      <div class="infor">
        <span>浮</span>
        <p>曹雪芹</p>
      </div>
    </div>

    <div class="lie">
      <img src="../../assets/img/book.jpg" alt="">
      <div class="infor">
        <span>浮</span>
        <p>曹雪芹</p>
      </div>
    </div>

    <div class="lie">
      <img src="../../assets/img/book.jpg" alt="">
      <div class="infor">
        <span>浮</span>
        <p>曹雪芹</p>
      </div>
    </div>

    <div class="lie">
      <img src="../../assets/img/book.jpg" alt="">
      <div class="infor">
        <span>浮</span>
        <p>曹雪芹</p>
      </div>
    </div>

    <div class="lie">
      <img src="../../assets/img/book.jpg" alt="">
      <div class="infor">
        <span>浮</span>
        <p>曹雪芹</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bgco {
  background-color: #e8eaed;
}
.lie{
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 10px;
  margin: 15px 10px;
}
  .lie img{
    width: 50px;
    height: 80px;
    border-radius: 5px;  
    margin: 10px 5px 10px 20px;   
  }
  .infor {
    margin-top: 14px;
    margin-left: 10px;
    flex-direction:column;
  }
  .infor p{
    color: #95a1a6;
  }
</style>