import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { transformLazyShow } from "v-lazy-show";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: { nodeTransforms: [transformLazyShow] },
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
