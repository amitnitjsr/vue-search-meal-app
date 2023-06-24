import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // proxy: 'http://localhost:3000'
  
  // server: {
  //   open: true,
  //   origin: 'http://localhost:3000'
  // },

  // server: {
  //   proxy: {
  //     // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
  //     '/foo': 'http://localhost:3000',
  //     // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
  //     '/api': {
  //       target: 'www.themealdb.com/api/json/v1/1/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //     // with RegEx: http://localhost:5173/fallback/ -> www.themealdb.com/api/json/v1/1//
  //     '^/fallback/.*': {
  //       target: 'www.themealdb.com/api/json/v1/1/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/fallback/, ''),
  //     },
  //   }
  // }

  server: {
    origin: 'http://127.0.0.1:8080',
  },
})
