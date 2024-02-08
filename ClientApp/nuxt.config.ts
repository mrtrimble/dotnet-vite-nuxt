import mkcert from 'vite-plugin-mkcert';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3399,
    https: true,
  },
  vite: {
    plugins: [mkcert()],
    server: {
      strictPort: true,
      proxy: {
        '/api': {
          target: 'https://localhost:7053',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
      },
    },
  },
});
