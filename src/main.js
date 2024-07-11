import { createApp } from 'vue';
import App from './App.vue';
import './assets/global.css';
import router from './router';
import VueMask from 'v-mask';

createApp(App).use(router).mount('#app').use(VueMask);
