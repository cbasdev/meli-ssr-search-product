import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { IProductDetails } from '@/types/Product'
import ProductDescription from '@/modules/Product/ProductDescription'

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({} as IProductDetails)
  const router = useRouter()
  const { id } = router.query

  const fetchProductDetail = async (id?: string | string[]) => {
    try {
      const { details, description } = await fetch(`/api/products/${id}`, {
        method: 'GET',
      }).then((res) => res.json())
      if (details) {
        setProductDetails({
          ...details,
          ...description,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (id) {
      fetchProductDetail(id)
    }
  }, [id])

  return (
    <div>
      <ProductDescription productDetails={productDetails} />
    </div>
  )
}

export default ProductDetails
