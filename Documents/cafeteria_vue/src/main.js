import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vue3GoogleLogin from 'vue3-google-login';

import './styles/styles.scss'

createApp(App)
    .use(store)
    .use(vue3GoogleLogin, { clientId: '964193955907-n5idd56328ouham4h96liq95afhs3frq.apps.googleusercontent.com' })
    .use(router)
    .mount('#app')
