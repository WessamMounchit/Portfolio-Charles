import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: "Portfolio Charles",
        name: "Portfolio Charles Cantin",
        description: "Découvrez l'univers d'un passioné de la photographie",
        icons: [
          {
            src: "camera.svg",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/svg+xml",
          },
          {
            src: "camera.svg",
            type: "image/svg+xml",
            sizes: "128x128",
          },
          {
            src: "camera.svg",
            type: "image/svg+xml",
            sizes: "512x512",
          },
        ],
        start_url: ".",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#000000",
      }
    })
  ],
})
