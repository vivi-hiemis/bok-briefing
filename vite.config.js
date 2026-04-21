import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/bok-briefing/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: resolve(__dirname, '업무보고.html'),
    },
  },
  server: {
    open: '/업무보고.html',
  },
});
