import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import requestPlugin from './plugins/request'
import 'element-plus/dist/index.css'

import '@/assets/css/global.css'
import '@/assets/css/theme/index.css'

const app = createApp(App)

app.use(requestPlugin)
app.use(router) // app.config.globalProperties.$router
app.use(ElementPlus, { size: 'small' })

app.mount('#app')
