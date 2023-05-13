import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import '@/assets/css/index.less'

import router from './router'
import pinia from './store'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import registerIcons from './global/register-icons'

if (import.meta.env.MODE === 'development') {
  ;(async () => {
    const { mocker } = await import('@/mocks/handlers')
    mocker.start({
      onUnhandledRequest: 'bypass'
    })
    console.log('开启mock')
  })()
}

const app = createApp(App)
app.use(router)
app.use(pinia)
// app.use(ElementPlus)

app.use(registerIcons)

app.mount('#app')
