import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "https://wadda0714.github.io/My_Portfolio/css/style.css",
        },
      },
    },
  },
});
