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
      const { data } = await fetch(`/api/products/${id}`, {
        method: 'GET',
      }).then((res) => res.json())
      if (data) {
        setProductDetails(data)
      }
    } catch (error) {
      console.log('error')
    }
  }

  useEffect(() => {
    fetchProductDetail(id)
  }, [id])

  return (
    <div>
      <ProductDescription description={productDetails.plain_text} />
    </div>
  )
}

export default ProductDetails
