import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({
      include: '**/*.svg',
      svgrOptions: { exportType: 'named', namedExport: 'ReactComponent', icon: true }
    }),
    react()
  ],
  server: { port: 5173, open: true },
  build: { outDir: '../dist', emptyOutDir: true },
  assetsInclude: ['**/*.ttf']
});
