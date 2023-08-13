<template>
  <div class="bg-red-400">
    <el-form :model="userData">
      <!-- 必填表 -->
      <el-form-item label="用户名">
      </el-form-item>
      <el-form-item label="密码">
      </el-form-item>
      <el-form-item label="性别">
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group>
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>

      <!-- 选填表 -->
    </el-form>

    <!-- 按钮部分 -->
    <div class="space-x-4">
      <el-button type="primary" @click="login">
        登录
      </el-button>
      <registerDialog :register-visable="registerVisable"></registerDialog>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { User } from '@/type/user/user'
import registerDialog from "@/views/register/registerDialog.vue"

const registerVisable = ref(false)
// 初始化user数据
const userData = ref<User>({
  userName: '',
  password: '',
  sex: '',
})

// 登录事件
const login = () => {
  console.log('登录事件')
}


</script>
