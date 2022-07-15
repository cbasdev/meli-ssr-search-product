import React from 'react'
import { IProduct } from '@/types/Product'
import Image from 'next/image'

interface PropsProductItem {
  product: IProduct
  border: boolean
}

const ProductItem = ({ product, border }: PropsProductItem) => {
  console.log(border)
  return (
    <div className={border ? 'border-b flex' : 'flex'}>
      <div className='my-4'>
        <Image
          src={product.thumbnail}
          alt='image-alt-text'
          width={100}
          height={100}
          unoptimized
        />
      </div>
      <div className='flex flex-col justify-center'>
        <h1>{product.title}</h1>
        <h1>{product.price}</h1>
      </div>
    </div>
  )
}

export default ProductItem
