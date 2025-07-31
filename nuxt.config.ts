// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      projectId: process.env.NUXT_PROJECT_ID
    }
  },
  devServer: {
    host: '0.0.0.0',  // 同时允许 localhost 和 IP 地址访问
    port: 3001       // 使用默认端口或指定其他端口
  }
})
