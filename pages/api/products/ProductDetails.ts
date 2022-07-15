import { NextApiHandler } from 'next'
import { ProductService } from '@api/meli-api/services/product.service'

const getProductDetail: NextApiHandler = async (request, response) => {
  try {
    const { id } = JSON.parse(request.body)
    if (id) {
      const { getProductDescription, getProductDetail } = ProductService()
      const productDescription = await getProductDescription(id)
      const productDetail = await getProductDetail(id)
      response.status(200).json({
        details: productDetail.data,
        description: productDescription.data,
        author: {
          name: 'Sebastian',
          lastname: 'Velez',
        },
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
