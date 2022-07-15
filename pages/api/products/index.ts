import { NextApiHandler } from 'next'
import { ProductService } from '@api/meli-api/services/product.service'

const getProducts: NextApiHandler = async (request, response) => {
  try {
    const { search } = JSON.parse(request.body)
    if (search) {
      const { getProducts } = ProductService()
      const product: any = await getProducts(search)
      response.status(200).json({
        data: product.data.results,
      })
    } else {
      console.log('No existe valor de busqueda')
    }
  } catch (error) {
    response.status(400).json({
      error,
    })
  }
}

export default getProducts
