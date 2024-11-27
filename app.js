// app.js

// 导入 Vue 组件
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import GeneralClinic from './components/GeneralClinic.vue';
import CheckupCenter from './components/CheckupCenter.vue';
import EmergencyService from './components/EmergencyService.vue';
import PediatricClinic from './components/PediatricClinic.vue';

// 定义路由
const routes = [
    { path: '/', component: Home },
    { path: '/general-clinic', component: GeneralClinic },
    { path: '/checkup-center', component: CheckupCenter },
    { path: '/emergency-service', component: EmergencyService },
    { path: '/pediatric-clinic', component: PediatricClinic },
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 创建 Vue 应用
const app = createApp({});
app.use(router);
app.mount('#app');
