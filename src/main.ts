import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:windi.css'

// 引入elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入路由
import router from './router'

// 创建app实例
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
// 挂载服务
app.mount('#app')
