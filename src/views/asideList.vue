<template>
    <el-aside class="bg-green-200 h-170" width="250px">
        <div class="w-full h-170 p-10 flex flex-col gap-4">
        <!-- 登录按钮 -->
        <el-button type="primary" round @click="openLoginDemo">
          打开登录demo
        </el-button>
        <ElButton type="primary" round>其他功能</ElButton>
      </div>
    </el-aside>
    <!-- 按钮部分 -->
  </template>
  
  <script setup lang="ts">
  import router from '@/router';
  
  // 定义打开登录Demo的事件 利用router.push实现了路由跳转
  const openLoginDemo = () => {
    router.push('/login');
  }
  </script>
  
  <style scoped>
  </style>