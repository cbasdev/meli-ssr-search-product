import { HttpRequest } from '../../HttpRequest'
import { AxiosResponse } from 'axios'

export interface IProductService {
  getProducts(query: string): Promise<AxiosResponse>
}

export const ProductService = (): IProductService => {
  const url = process.env.API_MELI
  const httpRequest = new HttpRequest(url)

  const getProducts = async (query: string): Promise<AxiosResponse> => {
    return httpRequest.get(`sites/MLA/search?q=${query}`)
  }

  return {
    getProducts,
  }
}
