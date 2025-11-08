// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/behance-projects': {
        target: 'http://localhost:3000', // si tu utilises serveur Node
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
