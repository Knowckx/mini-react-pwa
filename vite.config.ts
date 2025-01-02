import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert';
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [
        react(), mkcert(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png', 'pwa-192x192.png'], // 添加图标到缓存
            workbox: {
                globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,gif,svg,woff,woff2}'] // 缓存所有常见的静态资源
            },
            manifest: {
                name: 'My PWA App',
                short_name: 'MyPWA',
                description: 'My PWA App Description',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    }
                ],
            },
        })
    ],
    server: {
        https: {}, // 开启 HTTPS
        host: true,
        port: 3000,    // 将端口号修改为旧项目的端口号
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})