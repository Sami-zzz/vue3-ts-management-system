import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MYRequestInterceptors, MYRequestConfig } from './type'

// import { ElLoading } from 'element-plus'
// import 'element-plus/theme-chalk/el-loading.css'

class MYRequest {
  instance: AxiosInstance
  interceptors?: MYRequestInterceptors
  // loading: any
  // showLoading?: boolean

  constructor(config: MYRequestConfig) {
    this.instance = axios.create(config)
    //是否使用loading
    // this.showLoading = config.showLoading ?? false

    //每个实例独有的config配置拦截器
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //每个实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        //使用loading动画
        // if (this.showLoading) {
        //   this.loading = ElLoading.service({
        //     lock: true,
        //     text: '正在请求数据...',
        //     background: 'rgba(0, 0, 0, 0.5)'
        //   })
        // }

        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        //关闭loading
        // this.loading?.close()
        return res.data
      },
      (err) => {
        //关闭loading
        // this.loading?.close()

        //使用HttpErrorCode
        // if (err.response.status === 404) {
        //   console.log('404错误')
        // }
        return err
      }
    )
  }

  request<T = any>(config: MYRequestConfig): Promise<T> {
    //为request请求使用单独的请求拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    return new Promise((resolve, reject) => {
      //通过request请求中的配置项配置loading
      // if (config.showLoading === true) {
      //   this.showLoading = config.showLoading
      // }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          //为request请求使用单独的响应拦截器
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          //设置loading为默认
          // this.showLoading = false
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: MYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: MYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T = any>(config: MYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: MYRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default MYRequest
