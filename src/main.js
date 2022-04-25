import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueNativeSock from 'vue-native-websocket'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueNativeSock, 'ws://localhost:8080/tetris', {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
})

Vue.prototype.$socket.onmessage = (data) => console.log(data.data)
