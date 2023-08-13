export const constantRouter =  [
    {
        path:'/login',
        component: () => import('@/views/login/index.vue'),
        name:'login'
    },
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
        name:'layout'
    },
    {
        path: '/404',
        component: () => import('@/views/404/404.vue'),
        name: '404'
    },
    // 未匹配到任何路由
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any'
    },
]