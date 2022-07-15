import { NextApiHandler } from 'next'
import { ProductService } from '@api/meli-api/services/product.service'
import enablePublicAccess from '@cors'

const getProductDetail: NextApiHandler = async (request, response) => {
  try {
    console.log(request.body)
    const { id } = JSON.parse(request.body)
    await enablePublicAccess(request, response)

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
