import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // 可选，如果旧项目不是 localhost，修改为对应的域名
    port: 3000,    // 将端口号修改为旧项目的端口号
    // 如果旧项目使用 https，请添加以下配置
    // https: {
    //  key: '<path to key file>',
    //  cert: '<path to cert file>',
    // },
  },
})
