import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import 'vue-global-api'
import router from '@/router'
import '@/microApp'

createApp(App).use(router).mount("#app");
