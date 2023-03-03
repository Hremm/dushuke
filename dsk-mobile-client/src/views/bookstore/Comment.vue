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
<<<<<<< HEAD
        <van-button round type="success" size="large" style="width: 80%; margin-top: 20%;">确定</van-button>
=======
        <van-button round type="success" size="large" style="width: 80%; margin-top: 20%;">确认</van-button>
>>>>>>> f38edc43a89680a73592dfdfbc7b209093f0f3bc
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()  // 获取路由管理器对象

</script>

<style scoped>

</style>