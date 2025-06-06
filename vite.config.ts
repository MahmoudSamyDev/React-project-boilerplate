import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split react, react-dom into a separate chunk
          react: ['react', 'react-dom'],
  
          // Split router separately
          router: ['react-router-dom'],
  
          // Split any other heavy library you use
          ui: ['@mui/material', '@mui/icons-material'],
  
          // Example: if you use chart.js, split it
          // charts: ['chart.js']
        }
      }
    },
  }
})
