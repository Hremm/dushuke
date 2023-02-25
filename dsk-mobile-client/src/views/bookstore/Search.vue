<template>
    <div>
        <form action="/">
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
        />
        </form>
        <div class="search">历史搜索/热门搜索</div>
        <h4>猜你喜欢</h4>
        <div class="book">
        <img src="../../assets/sspl.jpg">
        <p>生死疲劳</p>
        <p class="p1">阅读《斗破苍穹》的人也在看</p>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .search{
        height: 300px;
        background-color: #0f0;
    }
    h4{
        float: left;
        margin-left: 50px;
    }
</style>
