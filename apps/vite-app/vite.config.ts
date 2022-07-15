import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";
// import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  resolve:{
    // ↓ 追記
    // alias: {
    //   "@src/": `${__dirname}/src/`, // path.join(__dirname, "src/") でも可
    // },
  },
  
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './vitest.setup.ts',
    resolveSnapshotPath: (testPath, snapExtension) => testPath + snapExtension,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
