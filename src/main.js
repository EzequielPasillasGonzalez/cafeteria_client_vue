import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vue3GoogleLogin from 'vue3-google-login';

import './styles/styles.scss'

createApp(App)
    .use(store)
    .use(vue3GoogleLogin, { clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID })
    .use(router)
    .mount('#app')
