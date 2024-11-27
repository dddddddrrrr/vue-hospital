import './assets/main.css'
import './assets/styles.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 引入路由配置


createApp(App).use(router).mount('#app');


app.use(router); // 注册路由
app.mount('#app');