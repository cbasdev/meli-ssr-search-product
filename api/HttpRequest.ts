import axios, {
  AxiosInstance,
  AxiosStatic,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

export class HttpRequest {
  private httpInstance: AxiosInstance
  constructor(
    baseURL = process.env.API_MELI || 'https://api.mercadolibre.com',
    httpClient: AxiosStatic = axios
  ) {
    this.httpInstance = this.createHttpInstance(baseURL, httpClient)
  }

  createHttpInstance(baseURL: string, httpClient: AxiosStatic): AxiosInstance {
    return httpClient.create({
      baseURL,
    })
  }

  /* Implementation of http verbs */

  get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.httpInstance.get(url, config)
  }

  post<T, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.httpInstance.post(url, data, config)
  }

  put<T, R = AxiosResponse<T>>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.httpInstance.put(url, data, config)
  }

  delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.httpInstance.delete(url, config)
  }
}
