import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import dayjs from "dayjs";
dayjs().format();

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(store);
app.mount("#app");
