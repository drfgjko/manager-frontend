import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }) => {
  // 加载 .env 文件内容，支持 VITE_ 前缀变量
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            title: 'vue3+vite', // 设置页面标题
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 8080,
    },
    define: {
      'process.env': env,
    },
  }
})
