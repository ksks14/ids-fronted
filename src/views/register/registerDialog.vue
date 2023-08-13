<template>
    <ElButton type="default" @click="openRegisterDialog">注册</ElButton>
    <!-- 同级的dialog，用以注册 -->
    <ElDialog 
    title="注册用户"
    v-model="registerVisableRef"
    >
    <h1>注册的dialog</h1>
    <!-- 按钮部分 -->
    <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="registerVisableRef = false">
            注册
          </el-button>
          <el-button @click="registerVisableRef = false">关闭</el-button>
        </span>
      </template>
    </ElDialog>
</template>
<script setup lang="ts">
import { reactive, ref, toRef } from 'vue'


// defineProps会随着setup一起被编译
// 这是一种父子间通信的写法，子组件可以通过definePropsAPI接受父组件的传参
// 可以配合defineemits修改付父组件的值
const props = defineProps({
    registerVisable: {
        type: Boolean,
        required: true
    }
})

// toRef: 创建一个ref对象，其value值指向另一个对象中的某个属性,
// toRef的本质是引用，ref的本质是拷贝
const registerVisable = toRef(props, 'registerVisable')
const registerVisableRef = ref(registerVisable.value)

const openRegisterDialog = () => {
    registerVisableRef.value = true
}


const state = reactive({
  count: 0
})

const countRef = toRef(state, 'count')

console.log(countRef.value) // 输出：0

countRef.value = 10 // 在修改引用的 value 属性时，不会修改原始数据对象

console.log(countRef.value) // 输出：10
console.log(state.count) // 输出：10

</script>
<style scoped></style>