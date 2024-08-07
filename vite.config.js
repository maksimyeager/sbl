import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '.htaccess',
          dest: ''
        }
      ]
    })
  ],
  server: {
    port: 5173
  },
})
