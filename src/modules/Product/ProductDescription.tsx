import React from 'react'
import { IProductDetails } from '@/types/Product'
import ShortDescription from '@/components/ShortDescription'
import PayMethodProduct from '@/components/PayMethodProduct'
import MagnifierImg from '@/components/MagnifierImg'

interface PropsProductDescription {
  productDetails: IProductDetails
}

const ProductDescription = ({ productDetails }: PropsProductDescription) => {
  return productDetails.thumbnail ? (
    <div className=' bg-white-0 shadow-sm rounded-md max-w-screen-xl mx-auto my-10 p-10'>
      <div className='flex'>
        <div>
          <div>
            <div className='flex gap-4'>
              <div className='max-w-md w-screen flex justify-center'>
                <MagnifierImg
                  src={productDetails.thumbnail}
                  width={'468'}
                  height={'370'}
                  magnifierHeight={400}
                  magnifierWidth={400}
                  zoomLevel={1.5}
                />
              </div>
              <div>
                <ShortDescription productDetail={productDetails} />
              </div>
            </div>
          </div>

          <div className=' border-t ml-8 mr-8 mt-10 border-gray-200 '>
            <h2 className=' my-5 text-2xl'>Características del producto</h2>
            <p className=' font-light'>{productDetails.plain_text}</p>
          </div>
        </div>

        <div>
          <PayMethodProduct />
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )
}

export default ProductDescription
