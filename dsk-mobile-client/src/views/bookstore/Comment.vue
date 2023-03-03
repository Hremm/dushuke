<template>
    <div>
        <van-nav-bar
        title="点评《斗破苍穹》"
        left-text="返回"
        left-arrow
        @click-left="$router.go(-1)"
        />
        <van-cell-group inset>
        <van-field
            rows="2"
            autosize
            type="textarea"
            maxlength="500"
            placeholder="写下你的感悟吧！"
            show-word-limit
        />
        </van-cell-group>
        <div class="content"></div>
        <van-button round type="success" size="large" style="width: 80%; margin-top: 20%;">确定</van-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()  // 获取路由管理器对象

</script>

<style scoped>

</style>