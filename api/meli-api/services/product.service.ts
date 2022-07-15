import { HttpRequest } from '../../HttpRequest'
import { AxiosResponse } from 'axios'

export interface IProductService {
  getProducts(query: string): Promise<AxiosResponse>
  getProductDetail(id: string): Promise<AxiosResponse>
  getProductDescription(id: string): Promise<AxiosResponse>
}

export const ProductService = (): IProductService => {
  const url = process.env.API_MELI
  const httpRequest = new HttpRequest(url)

  const getProducts = async (query: string) => {
    return httpRequest.get(`sites/MLA/search?q=${query}`)
  }

  const getProductDetail = async (id: string) => {
    return httpRequest.get(`https://api.mercadolibre.com/items/${id}`)
  }

  const getProductDescription = async (id: string) => {
    return httpRequest.get(
      `https://api.mercadolibre.com/items/${id}/description`
    )
  }

  return {
    getProducts,
    getProductDetail,
    getProductDescription,
  }
}
