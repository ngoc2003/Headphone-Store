import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// <i18n>
//   {
//     "en": {
//       "button": {
//         "shopNow": "dhgfjkn"
//       }
//     },

//   }
//   </i18n>
