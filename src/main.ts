import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/index.less'
import router from './router'
import store from './store'
import icons from './global/register-icons'

//开启mock
if (import.meta.env.MODE === 'development') {
  ;(async () => {
    const { mocker } = await import('@/mocks/handlers')
    mocker.start({
      onUnhandledRequest: 'bypass'
    })
  })()
}

const app = createApp(App)
app.use(store)
app.use(router)
app.use(icons)
app.mount('#app')
