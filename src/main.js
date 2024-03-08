import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vue3GoogleLogin from 'vue3-google-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


import './styles/styles.scss'
import './styles/framework.css'

createApp(App)
    .use(store)
    .use(vue3GoogleLogin, { clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID })
    .use(router)
    .mount('#app')
