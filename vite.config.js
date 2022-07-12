import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
  plugins: [vue()],
});
