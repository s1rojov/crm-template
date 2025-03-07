import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from './router'

//global components
import BaseIcon from '@/components/BaseIcon/index.vue'
import CustomButton from '@/components/CustomButton/index.vue'

const app = createApp(App)

app.component('BaseIcon', BaseIcon)
app.component('CustomButton', CustomButton)

app.use(createPinia())
app.use(Quasar, {
  plugins: {},
})
app.use(router)

app.mount('#app')
