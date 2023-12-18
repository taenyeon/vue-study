import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue'),
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/test/index.vue'),
    },
    {
        path: '/join',
        name: 'join',
        component: () => import('@/views/join/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/chat',
        name: 'chat',
        component: () => import('../views/chat/index.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
