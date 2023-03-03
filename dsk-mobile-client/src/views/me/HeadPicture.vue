<template>
  <div>
    <van-nav-bar
      title="编辑资料"
      left-arrow
      
      @click-left="$router.go(-1)"
    />
    <van-divider
  :style="{borderColor: '#d8d8d8' , padding: '0 16px'}"
>
</van-divider>
    <!-- 圆形头像 -->
    <van-image
        round
        fit="cover"
        width="5rem"
        height="5rem"
        src="../../assets/img/cl.png"
      />
      <p style="font-size: 16px;">点击更换头像</p>

      <van-form>
        <van-field
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          name="性别"
          label="性别"
          placeholder="性别"
          :rules="[{ required: true, message: '请填写性别' }]"
        />
        <van-field
          name="生日"
          label="生日"
          placeholder="完善生日信息"
          :rules="[{ required: true, message: '请完善生日信息' }]"
        />
        <van-field
          name="个人简介"
          label="个人简介"
          placeholder="一句话描述"
        />
      </van-form>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>