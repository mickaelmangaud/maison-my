import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import { remixDevTools } from 'remix-development-tools';
import tsConfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';

export default defineConfig({
  plugins: [
    remixDevTools(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      presets: [vercelPreset()],
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

  build: {
    target: 'ES2022', // avoid build errors on Vercel
  },
});
