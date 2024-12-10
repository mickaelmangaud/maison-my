import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
// import { remixDevTools } from 'remix-development-tools';
import tsConfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';
import eslint from '@nabla/vite-plugin-eslint';

export default defineConfig({
  plugins: [
    // remixDevTools(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
      },
      presets: [vercelPreset()],
      ignoredRouteFiles: ['**/*.css'],
      appDirectory: 'app',
      buildDirectory: 'build',
    }),
    tsConfigPaths(),
    eslint(),
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
