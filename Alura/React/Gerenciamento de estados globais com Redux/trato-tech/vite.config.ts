import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), tsconfigPaths({ loose: true }), viteSvgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/breakpoints";`,
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
