import MYRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
  //为每个实例添加拦截器
  // interceptors: {
  //   requestInterceptor: (config) => {
  //     //给每个请求添加token
  //     const token = ''
  //     if (token) {
  //       config.headers.Authorization = `bearer ${token}`
  //     }

  //     return config
  //   },
  //   requestInterceptorCatch: (err) => {
  //     return err
  //   },
  //   responseInterceptor: (res) => {
  //     return res
  //   },
  //   responseInterceptorCatch(err) {
  //     return err
  //   }
  //}
})

export default myRequest
