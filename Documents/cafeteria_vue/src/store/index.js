import { createStore } from 'vuex'

import products from '../modules/products/store/products';
import authStore from '../modules/auth/store/auth';
import orderStore from '../modules/products/store/order';

export default createStore({
  modules: {
    products,
    authStore,
    orderStore
  }
})

