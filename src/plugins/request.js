// 封装为插件
import axios from 'axios'

export default {
  install(app) {
    const router = app.config.globalProperties.$router

    const request = axios.create({
      baseURL: import.meta.env.VITE_BASEURL,
      timeout: 30000,
    })

    request.interceptors.request.use(
      (config) => {
        config.headers['Content-Type'] = 'application/json;charset=utf-8'
        const user = JSON.parse(localStorage.getItem('xm-user') || '{}')
        config.headers['token'] = user.token
        return config
      },
      (error) => Promise.reject(error)
    )

    request.interceptors.response.use(
      (response) => {
        let res = response.data
        if (typeof res === 'string') {
          res = res ? JSON.parse(res) : res
        }
        if (res.code === '401') {
          router.push('/login')
        }
        return res
      },
      (error) => Promise.reject(error)
    )

    // 挂载到 Vue 的全局属性中
    app.config.globalProperties.$request = request
    // 全局范围内提供
    app.provide('request', request)
  },
}
