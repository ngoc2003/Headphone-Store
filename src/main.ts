import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import i18n from './services/i18n'

const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')
