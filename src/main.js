import { createApp } from 'vue'
import VueNativeSock from 'vue-native-websocket-vue3'

import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'


var app = createApp(App)
app.use(router)
app.use(store)
app.use(VueNativeSock, 'wss://localhost/ws', {
    store: store,
    format: 'json',
    reconnection: true,
    reconnectionDelay: 2000,
    }
)


app.mount('#app')
