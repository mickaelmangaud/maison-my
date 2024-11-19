import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import { remixDevTools } from 'remix-development-tools';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    remixDevTools(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsConfigPaths(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
