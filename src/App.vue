<template>
  <div class="common-layout">
    <el-container>
      <el-header class="w-full bg-gray-500" height="60px">头部导航栏</el-header>
      <el-container>
        <asideList></asideList>
        <el-container>
          <el-main>
            <router-view class="p-20"></router-view>
          </el-main>
          <el-footer class="bg-gray-300">底部框</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import asideList from './views/asideList.vue';
</script>

<style scoped>
</style>
