import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ensures relative paths in production
  plugins: [react()],
  build: {
    outDir: 'dist', // Specifies the output folder for built files
    rollupOptions: {
      input: './index.html', // Ensures Rollup starts from the correct entry point
    },
  },
});
