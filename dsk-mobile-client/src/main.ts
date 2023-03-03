import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'



createApp(App).use(store).use(router).mount('#app')
