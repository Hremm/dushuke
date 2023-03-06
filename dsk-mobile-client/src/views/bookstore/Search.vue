<template>
    <div>
        <form action="/">
        <van-search class="nav"
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="$router.go(-1)"
        />
        <div class="h1"></div>
        </form>
        <div class="search">历史搜索/热门搜索</div>
        <h4>猜你喜欢</h4>
        <div class="book" @click="$router.push('/home/details')">
            <img src="../../assets/sspl.jpg">
            <p>生死疲劳</p>
            <p>阅读《斗破苍穹》的人也在看</p>
        </div>
        <div class="book" @click="$router.push('/home/details')">
            <img src="../../assets/img/dp.png" style="margin-top: 10px;">
            <p>斗破苍穹</p>
            <p>阅读《斗破苍穹》的人也在看</p>
        </div>
    </div>
</template>

<script setup  lang="ts">
import { showToast, ToastOptions } from 'vant';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()  // 获取路由管理器对象


    

 const value = ref('');
 const onSearch = (val: string|ToastOptions) => showToast(val);
 const onCancel = () => showToast('取消');
  



</script>

<style scoped>
.nav{
    position: fixed;
    top: 0px;
    width: 100%;
  }
  .h1{
    height: 50px;
  }
.search{
        height: 300px;
        background-color: #0f0;
    }
 h4{
    float: left;
    margin-left: 50px;
    }
 .book{
    height: 140px; 
    float: left;
  }
  p{
    display: flex;
    margin-left: 140px;
  }
  img{
    height: 140px;
    float: left;
    margin-left: 20px;
    border-radius: 5px;
  }
</style>
