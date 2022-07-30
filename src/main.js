import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./index.css";
import mitt from "mitt";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(far, fas, fab);

const app = createApp(App);
const pinia = createPinia();
const emitter = mitt();

app.use(pinia);
app.use(router);
app.provide("emitter", emitter);
app.component("font-icon", FontAwesomeIcon);
app.mount("#app");
