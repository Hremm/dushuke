<template>
    <div>
      <VanSearch
      @click="$router.push('/home/search')"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"/>
      <VanSwipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <VanSwipeItem>1</VanSwipeItem>
        <VanSwipeItem>2</VanSwipeItem>
        <VanSwipeItem>3</VanSwipeItem>
        <VanSwipeItem>4</VanSwipeItem>
      </VanSwipe>
      <div class="er">
        <span class="c1">猜你喜欢</span>
      <button class="btn" @click="$router.push('/home/more')">更多 ></button>
      </div>
      <div class="book" @click="$router.push('/home/details')">
        <img src="../../assets/sspl.jpg" mode="widthFix">
        <p>生死疲劳</p>
        <p>莫言 | 现实</p>
        <p class="p1">《生死疲劳》讲述了一个被冤杀的地主经历了六道轮回，变成驴、牛、猪、狗、猴，最后终于又转生为一个带着先天性不可治愈疾病的大头婴儿；这个大头婴儿滔滔不绝地讲述着他身为畜牲时的种种奇特感受，以及地主西门闹一家和农民蓝解放一家半个多世纪生死疲劳的悲欢故事。小说透过各种动物的眼睛，观照并体味了五十多年来中国乡村社会的庞杂喧哗、充满苦难的蜕变历史</p>
      </div>
     <div class="content" @click="$router.push('/home/details')">
      <div>
        <img src="../../assets/sspl.jpg" style="width: 100px;" mode="widthFix">
        <img src="../../assets/sspl.jpg" style="width: 100px;" mode="widthFix">
        <img src="../../assets/sspl.jpg" style="width: 100px;" mode="widthFix">
      </div>
     </div>
     <VanDivider :style="{ color: '#c1c1c1', borderColor: '#c1c1c1', padding: '0 16px' }"></VanDivider>
      <VanDivider :style="{ color: '#c1c1c1', borderColor: '#c1c1c1', padding: '0 16px' }"></VanDivider>
      <div class="er">
        <span class="c1">本周推荐</span>
      <button class="btn" @click="$router.push('/home/more')">更多 ></button>
      </div>
      <div class="content" @click="$router.push('/home/details')">
        <img src="../../assets/img/dp.png" mode="widthFix">
        <img src="../../assets/img/dp.png" mode="widthFix">
        <img src="../../assets/img/dp.png" mode="widthFix">
      </div>
      <VanDivider :style="{ color: '#c1c1c1', borderColor: '#c1c1c1', padding: '0 16px' }"></VanDivider>
      <VanDivider :style="{ color: '#c1c1c1', borderColor: '#c1c1c1', padding: '0 16px' }"></VanDivider>
      <div class="er">
        <span class="c1">更多推荐</span>
      <button class="btn" @click="$router.push('/home/more')">更多 ></button>
      </div>
      <div class="book" @click="$router.push('/home/details')">
        <img src="../../assets/img/dp.png" mode="widthFix">
        <p>斗破苍穹</p>
        <p>天蚕土豆 | 玄幻</p>
        <p class="p1">这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！
主角萧炎，原是萧家历史上空前绝后的斗气修炼天才，4岁就开始修炼斗之气，10岁拥有了九段斗之气，11岁突破十段斗之气，一跃成为家族百年来最年轻的斗者。然而在11岁那年，他却“丧失”了修炼能力，并且斗气逐渐减少，直至三段斗之气。整整三年多时间，家族冷落，旁人轻视，被未婚妻退婚……种种打击接踵而至。
就在他即将绝望的时候，一缕灵魂从他手上的戒指里浮现，一扇全新的大门在面前开启！萧炎重新成为家族年轻一辈中的佼佼者，受到众人的仰慕，他却不满足于此。为了一雪退婚带来的耻辱，萧炎来到了魔兽山脉，在药老的帮助下，为了进一步提升自己的修为，在魔兽山脉，他结识了小医仙，云芝（云岚宗宗主云韵）等人，他发现自己面向的世界更加宽广了。
三十年河东，三十年河西，莫欺少年穷！ 年仅15岁的萧家废物，于此地，立下了誓言，从今以后便一步步走向斗气大陆巅峰！</p>
      </div>
      <div class="book">
        <img src="../../assets/img/dp.png" mode="widthFix">
        <p>斗破苍穹</p>
        <p>天蚕土豆 | 玄幻</p>
        <p class="p1">这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！
主角萧炎，原是萧家历史上空前绝后的斗气修炼天才，4岁就开始修炼斗之气，10岁拥有了九段斗之气，11岁突破十段斗之气，一跃成为家族百年来最年轻的斗者。然而在11岁那年，他却“丧失”了修炼能力，并且斗气逐渐减少，直至三段斗之气。整整三年多时间，家族冷落，旁人轻视，被未婚妻退婚……种种打击接踵而至。
就在他即将绝望的时候，一缕灵魂从他手上的戒指里浮现，一扇全新的大门在面前开启！萧炎重新成为家族年轻一辈中的佼佼者，受到众人的仰慕，他却不满足于此。为了一雪退婚带来的耻辱，萧炎来到了魔兽山脉，在药老的帮助下，为了进一步提升自己的修为，在魔兽山脉，他结识了小医仙，云芝（云岚宗宗主云韵）等人，他发现自己面向的世界更加宽广了。
三十年河东，三十年河西，莫欺少年穷！ 年仅15岁的萧家废物，于此地，立下了誓言，从今以后便一步步走向斗气大陆巅峰！</p>
      </div>
      <div class="book">
        <img src="../../assets/img/dp.png" mode="widthFix">
        <p>斗破苍穹</p>
        <p>天蚕土豆 | 玄幻</p>
        <p class="p1">这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！
主角萧炎，原是萧家历史上空前绝后的斗气修炼天才，4岁就开始修炼斗之气，10岁拥有了九段斗之气，11岁突破十段斗之气，一跃成为家族百年来最年轻的斗者。然而在11岁那年，他却“丧失”了修炼能力，并且斗气逐渐减少，直至三段斗之气。整整三年多时间，家族冷落，旁人轻视，被未婚妻退婚……种种打击接踵而至。
就在他即将绝望的时候，一缕灵魂从他手上的戒指里浮现，一扇全新的大门在面前开启！萧炎重新成为家族年轻一辈中的佼佼者，受到众人的仰慕，他却不满足于此。为了一雪退婚带来的耻辱，萧炎来到了魔兽山脉，在药老的帮助下，为了进一步提升自己的修为，在魔兽山脉，他结识了小医仙，云芝（云岚宗宗主云韵）等人，他发现自己面向的世界更加宽广了。
三十年河东，三十年河西，莫欺少年穷！ 年仅15岁的萧家废物，于此地，立下了誓言，从今以后便一步步走向斗气大陆巅峰！三十年河东，三十年河西，莫欺少年穷！ 年仅15岁的萧家废物，于此地，立下了誓言，从今以后便一步步走向斗气大陆巅峰！</p>
      </div>
      <div class="h1"></div>
    </div>

    
  </template>
  
  <script setup lang="ts">
import { ref } from 'vue';
import { Search, showToast, ToastOptions } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter()

 
    const value = ref('');
    const onSearch = (val: string|ToastOptions) => showToast(val);
    const onClickButton = () => showToast(value.value);



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
    height: 140px; 
    cursor:pointer
  }
  .p1{
    overflow: hidden;
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 2 ;
    -webkit-box-orient: vertical;
  }
  .content{
    display: flex;
    height: 140px;
    margin-top: 10px;
  }
  .h1{
    height: 50px;
  }
  </style>