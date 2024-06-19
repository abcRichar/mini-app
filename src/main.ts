import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from "pinia";
import uvUI from "@climblee/uv-ui";

export function createApp() {
  const app = createSSRApp(App);
  app.use(uvUI);
  return {
    app,
    Pinia,
  };
}
