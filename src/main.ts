import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.mount("#app");
app.use(store);
