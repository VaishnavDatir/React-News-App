import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',

    includeAssets: ['favicon.ico'],

    manifest: {
      name: 'React News',
      short_name: 'News',
      description: 'Latest news at your fingertips',
      theme_color: '#0f172a',
      background_color: '#ffffff',
      display: 'standalone',

      icons: [
        {
          src: '/vite.svg',
          type: 'image/svg+xml',
          sizes: 'any'
        }
      ]
    },

    workbox: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/newsapi\.org\/.*/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'news-api-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 // 1 hour
            }
          }
        }
      ]
    }
  })
  ],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'https://newsapi.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  preview: {
    host: true,
    proxy: {
      '/api': {
        target: 'https://newsapi.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})