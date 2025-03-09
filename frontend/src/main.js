import './assets/main.css'

import { createApp } from 'vue'
import { router } from './router.js'
import store from './store.js'
import App from './App.vue'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
