import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Giúp assets chạy chuẩn cả ở localhost và GitHub Pages
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
    cors: true
  }
});
