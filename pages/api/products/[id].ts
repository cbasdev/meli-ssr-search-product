import { NextApiHandler } from 'next'
import { ProductService } from '@api/meli-api/services/product.service'

const getProductDetail: NextApiHandler = async (request, response) => {
  try {
    const id = `${request.query.id}`
    if (id) {
      const { getProductDetail } = ProductService()
      const productDetail: any = await getProductDetail(id)
      response.status(200).json({
        data: productDetail.data,
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

export default getProductDetail
