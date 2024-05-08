import App from "./App.vue";
import router from "./routers";
import {createApp} from 'vue'

const app=createApp(App);
app.use(router);
app.mount("#app");


