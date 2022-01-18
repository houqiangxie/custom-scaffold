import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import 'vue-global-api'
import { createPinia } from 'pinia'

import { useRegisterSW } from 'virtual:pwa-register/vue';
useRegisterSW();

createApp(App).use(createPinia()).mount('#app')
