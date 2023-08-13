// 配置模板路由
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRouter } from "./router";

// 将方法暴露出去
const router = createRouter({
    // 路由模式，hash
    history: createWebHashHistory(),
    routes: constantRouter,
    // 滚动行为
    scrollBehavior(){
        return {
            left: 0,
            top: 0
        }
    }
})

export default router