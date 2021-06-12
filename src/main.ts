import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { router } from "@/plugins/router";
import store from "./store";

import "@/views";

const app = createApp(App).use(store).use(router);

router
  .isReady()
  .then(() => app.mount("#app"))
  .catch(() => console.error("router not ready"));
