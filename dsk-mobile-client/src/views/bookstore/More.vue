<template>
    <div>
        <van-nav-bar
            title="书籍列表"
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
            />
        <div class="book">
            <img src="../../assets/sspl.jpg">
            <p>生死疲劳</p>
            <p>莫言 | 现实</p>
            <p class="p1">西门闹继承家产而发迹，成了高密东北乡首富。娶妻白杏儿，无嗣；纳婢女迎春为二妾，蓝黛科技刚发来的舒服了肯定十分了解附近阿斯利康房间爱上了房间辣看手机福利卡时间分类洒进来客服</p>
        </div>
        <div class="book">
            <img src="../../assets/sspl.jpg">
            <p>生死疲劳</p>
            <p>莫言 | 现实</p>
            <p class="p1">西门闹继承家产而发迹，成了高密东北乡首富。娶妻白杏儿，无嗣；纳婢女迎春为二妾，蓝黛科技刚发来的舒服了肯定十分了解附近阿斯利康房间爱上了房间辣看手机福利卡时间分类洒进来客服</p>
        </div>
        <div class="book">
            <img src="../../assets/sspl.jpg">
            <p>生死疲劳</p>
            <p>莫言 | 现实</p>
            <p class="p1">西门闹继承家产而发迹，成了高密东北乡首富。娶妻白杏儿，无嗣；纳婢女迎春为二妾，蓝黛科技刚发来的舒服了肯定十分了解附近阿斯利康房间爱上了房间辣看手机福利卡时间分类洒进来客服</p>
        </div>
        <div class="book">
            <img src="../../assets/sspl.jpg">
            <p>生死疲劳</p>
            <p>莫言 | 现实</p>
            <p class="p1">西门闹继承家产而发迹，成了高密东北乡首富。娶妻白杏儿，无嗣；纳婢女迎春为二妾，蓝黛科技刚发来的舒服了肯定十分了解附近阿斯利康房间爱上了房间辣看手机福利卡时间分类洒进来客服</p>
        </div>
        <div class="book">
            <img src="../../assets/sspl.jpg">
            <p>生死疲劳</p>
            <p>莫言 | 现实</p>
            <p class="p1">西门闹继承家产而发迹，成了高密东北乡首富。娶妻白杏儿，无嗣；纳婢女迎春为二妾，蓝黛科技刚发来的舒服了肯定十分了解附近阿斯利康房间爱上了房间辣看手机福利卡时间分类洒进来客服</p>
        </div>
        <div class="book">
            <img src="../../assets/sspl.jpg">
            <p>生死疲劳</p>
            <p>莫言 | 现实</p>
            <p class="p1">西门闹继承家产而发迹，成了高密东北乡首富。娶妻白杏儿，无嗣；纳婢女迎春为二妾，蓝黛科技刚发来的舒服了肯定十分了解附近阿斯利康房间爱上了房间辣看手机福利卡时间分类洒进来客服</p>
        </div>
        <div class="book">
            <img src="../../assets/sspl.jpg">
            <p>生死疲劳</p>
            <p>莫言 | 现实</p>
            <p class="p1">西门闹继承家产而发迹，成了高密东北乡首富。娶妻白杏儿，无嗣；纳婢女迎春为二妾，蓝黛科技刚发来的舒服了肯定十分了解附近阿斯利康房间爱上了房间辣看手机福利卡时间分类洒进来客服</p>
        </div>
        <div class="book">
            <img src="../../assets/sspl.jpg">
            <p>生死疲劳</p>
            <p>莫言 | 现实</p>
            <p class="p1">西门闹继承家产而发迹，成了高密东北乡首富。娶妻白杏儿，无嗣；纳婢女迎春为二妾，蓝黛科技刚发来的舒服了肯定十分了解附近阿斯利康房间爱上了房间辣看手机福利卡时间分类洒进来客服</p>
        </div>
        <div class="book">
            <img src="../../assets/sspl.jpg">
            <p>生死疲劳</p>
            <p>莫言 | 现实</p>
            <p class="p1">西门闹继承家产而发迹，成了高密东北乡首富。娶妻白杏儿，无嗣；纳婢女迎春为二妾，蓝黛科技刚发来的舒服了肯定十分了解附近阿斯利康房间爱上了房间辣看手机福利卡时间分类洒进来客服</p>
        </div>
        <div class="h1"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()  // 获取路由管理器对象

</script>

<style scoped>
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
  .h1{
    height: 50px;
  }
</style>