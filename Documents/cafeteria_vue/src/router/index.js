import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home_Views.vue';


import productsRouter from '../modules/products/router'
import authRouter from '../modules/auth/router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    // path: '/about',
    // name: 'about',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products', 
    name: 'products',
    ...productsRouter //? Se importo del router de modules y se esparce con ...
  },
  {
    path: '/auth', 
    name: 'auth',
    ...authRouter //? Se importo del router de modules y se esparce con ...
  },
  {
    path: '/shopping',
    name: 'shopping',    
    component: () => import(/* webpackChunckName: "shopping" */ '../modules/products/layouts/Shop_Layout.vue'),            
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
