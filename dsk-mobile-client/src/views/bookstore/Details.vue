<template>
    <div>
        <van-nav-bar
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
            />
        <div class="book">
            <img src="../../assets/img/dp.png">
            <h2 class="h1">斗破苍穹</h2>
            <p>作者：天蚕土豆</p>
            <p class="p1">这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！
主角萧炎，原是萧家历史上空前绝后的斗气修炼天才，4岁就开始修炼斗之气，10岁拥有了九段斗之气，11岁突破十段斗之气，一跃成为家族百年来最年轻的斗者。然而在11岁那年，他却“丧失”了修炼能力，并且斗气逐渐减少，直至三段斗之气。整整三年多时间，家族冷落，旁人轻视，被未婚妻退婚……种种打击接踵而至。
就在他即将绝望的时候，一缕灵魂从他手上的戒指里浮现，一扇全新的大门在面前开启！萧炎重新成为家族年轻一辈中的佼佼者，受到众人的仰慕，他却不满足于此。为了一雪退婚带来的耻辱，萧炎来到了魔兽山脉，在药老的帮助下，为了进一步提升自己的修为，在魔兽山脉，他结识了小医仙，云芝（云岚宗宗主云韵）等人，他发现自己面向的世界更加宽广了。
三十年河东，三十年河西，莫欺少年穷！ 年仅15岁的萧家废物，于此地，立下了誓言，从今以后便一步步走向斗气大陆巅峰！</p>
        </div> <hr>
        <div>
            <p style="margin-left: 30px; font-size: 20px;">内容介绍</p>
            <span class="p2" @click="$router.push('/home/directory')">这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！
主角萧炎，原是萧家历史上空前绝后的斗气修炼天才，4岁就开始修炼斗之气，10岁拥有了九段斗之气，11岁突破十段斗之气，一跃成为家族百年来最年轻的斗者。然而在11岁那年，他却“丧失”了修炼能力，并且斗气逐渐减少，直至三段斗之气。整整三年多时间，家族冷落，旁人轻视，被未婚妻退婚……种种打击接踵而至。
就在他即将绝望的时候，一缕灵魂从他手上的戒指里浮现，一扇全新的大门在面前开启！萧炎重新成为家族年轻一辈中的佼佼者，受到众人的仰慕，他却不满足于此。为了一雪退婚带来的耻辱，萧炎来到了魔兽山脉，在药老的帮助下，为了进一步提升自己的修为，在魔兽山脉，他结识了小医仙，云芝（云岚宗宗主云韵）等人，他发现自己面向的世界更加宽广了。
三十年河东，三十年河西，莫欺少年穷！ 年仅15岁的萧家废物，于此地，立下了誓言，从今以后便一步步走向斗气大陆巅峰！</span>
        </div><hr>
        <div class="er">
        <span class="c1">书友评论（2条）</span>
      <button class="btn">查看全部</button>
      </div>
      <div style="height: 300px; background-color: aqua;"></div><br>
      <van-button type="default" @click="$router.push('/home/comment')" style="width: 100%;">写下我的书评</van-button><br>
      <div style="height: 100px;"></div>
    <van-tabbar active-color="#1afa29">
        <van-tabbar-item icon="add-o">加入书架</van-tabbar-item>
        <van-tabbar-item icon="browsing-history-o">免费试读</van-tabbar-item>
        <van-tabbar-item icon="down">全本下载</van-tabbar-item>
    </van-tabbar>

    </div>
    
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()  // 获取路由管理器对象

const active = ref(0);
//const active = ref('/home/details')
const tabChange = function(details:string){
  router.push(details)
}
</script>

<style scoped>
.book{
    height: 180px; 
  }
  p{
    display: flex;
    margin-left: 140px;
  }
  .p1{
    color: #999999;
    overflow: hidden;
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 3 ;
    -webkit-box-orient: vertical;
  }
  .p2{
    color: #999999;
    text-indent: 2em;
    line-height: 2;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 4 ;
    -webkit-box-orient: vertical;
  }
  .h1{
    display: flex;
    margin-left: 140px;
  }
  img{
    height: 180px;
    float: left;
    margin-left: 20px;
    border-radius: 5px;
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
    height: 50px;
  }
  .er{
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
</style>