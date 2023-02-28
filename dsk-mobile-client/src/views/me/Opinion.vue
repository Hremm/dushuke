<template>
  <div>
    <van-nav-bar left-arrow title="意见反馈" />

    <van-form>
      问题描述
      <input type="text" placeholder="请输入你的问题">
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader style="border: 1px dashed #ccc;" />
        </template>
      </van-field>

      <van-field name="checkboxGroup" label="复选框组">
        <template #input>
          <van-checkbox-group direction="horizontal">
            <van-checkbox name="1" shape="square">功能建议</van-checkbox>
            <van-checkbox name="2" shape="square">程序BUG</van-checkbox>
            <van-checkbox name="2" shape="square">书籍相关</van-checkbox>
            <van-checkbox name="2" shape="square">其他</van-checkbox>
          </van-checkbox-group>
    <van-button class="btn" type="primary" block>提交</van-button>
  </template>
</van-field>
    </van-form>
  </div>
</template>

<script setup lang="ts">
                 
</script>

<style scoped>
.btn{
  width: 90%;
  margin: 0 auto;
  font-size: 18px;
  margin-top: 15px;
}
</style>