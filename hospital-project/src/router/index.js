import { createRouter, createWebHistory } from 'vue-router';

// 导入新的组件路径
import Home from '@/components/Home.vue';
import GeneralClinic from '@/components/GeneralClinic.vue';
import EmergencyService from '@/components/EmergencyService.vue';
import CheckupCenter from '@/components/CheckupCenter.vue';
import PediatricClinic from '@/components/PediatricClinic.vue';

const routes = [
  { path: '/', name: 'Home', component: Home }, // 使用 components/Home.vue
  { path: '/general-clinic', name: 'GeneralClinic', component: GeneralClinic },
  { path: '/emergency-service', name: 'EmergencyService', component: EmergencyService },
  { path: '/checkup-center', name: 'CheckupCenter', component: CheckupCenter },
  { path: '/pediatric-clinic', name: 'PediatricClinic', component: PediatricClinic },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
