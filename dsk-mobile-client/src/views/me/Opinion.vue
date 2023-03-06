<template>
  <div>
    <van-nav-bar @click-left="$router.go(-1)" left-arrow title="意见反馈" />
    <van-divider
  :style="{borderColor: '#d8d8d8' , padding: '0 16px'}"
>
</van-divider>

    <van-form>
      问题描述
      <input type="text" placeholder="请输入你的问题">
      <van-field name="uploader" label="上传问题截图">
        <template #input>
          <van-uploader style="border: 1px dashed #ccc;" />
        </template>
      </van-field>

      <van-field class="feed" name="checkboxGroup" label="反馈类型">
        <template #input>
            <van-checkbox-group direction="horizontal">
              <van-checkbox class="zi" name="1" shape="square">功能建议</van-checkbox>
              <van-checkbox class="zi" name="2" shape="square">程序BUG</van-checkbox>
              <van-checkbox class="zi" name="2" shape="square">书籍相关</van-checkbox>
              <van-checkbox class="zi" name="2" shape="square">其他</van-checkbox>
            </van-checkbox-group>
            
        </template>
      </van-field>
      <van-button class="btn" type="primary" block>提交</van-button>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()  // 获取路由管理器对象        
</script>

<style scoped>
.btn{
  width: 90%;
  margin: 0 auto;
  font-size: 18px;
  margin-top: 15px;
}
.feed{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column
}
.zi {
  margin-top: 10px;
}
</style>