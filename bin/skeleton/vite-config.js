import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  project: '##PROJECT_NAME##',
  plugins: [react()],
  root: './src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
});
