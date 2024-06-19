import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import uniTailwind from "@uni-helper/vite-plugin-uni-tailwind";
import postcssConfig from "./postcss.config";
import { fileURLToPath, URL } from "node:url";
// @ts-ignore
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), uniTailwind()],
  css: {
    postcss: postcssConfig,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "#": fileURLToPath(new URL("./types", import.meta.url)),
    },
  },
});
