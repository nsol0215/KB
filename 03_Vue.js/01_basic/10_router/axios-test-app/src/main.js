import './assets/main.css';

import { createApp } from 'vue';
import App6 from './App6.vue';
import router from './router';

const app = createApp(App6);

app.use(router);

app.mount('#app');
