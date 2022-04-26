import Vue from "vue";
import VueNativeSock from "vue-native-websocket";

Vue.use(VueNativeSock, "ws://localhost:8080/tetris", {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
});

export default function handleSocket(handleMethod) {
  return (Vue.prototype.$socket.onmessage = (data) => handleMethod(data));
}
