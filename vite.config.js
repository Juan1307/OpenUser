import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // row
  plugins: [ react() ],
  server: {
    port: 3003,
    open: true
  },
  base:'/OpenUser/', //base path here and the wouter config app --- mmss 
  build:{
    outDir:'docs', // dist to docs
    assetsDir:'dist', // assets to dist 
    sourcemap: true
  }

})
