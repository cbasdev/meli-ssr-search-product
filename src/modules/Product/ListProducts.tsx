import React from 'react'
import ProductItem from '@/components/ProductItem/ProductItem'
import { IProduct } from '@/types/Product'

interface PropsListProducts {
  products: IProduct[]
}

const ListProducts = ({ products }: PropsListProducts) => {
  const hasBorder = (index: number) => {
    return index !== products.length - 1
  }

  return (
    <div className=' max-w-screen-xl mx-auto mt-10 bg-white-0 rounded-md p-10'>
      {products.map((product: IProduct, index: number) => (
        <ProductItem
          key={product.id}
          product={product}
          border={hasBorder(index)}
        />
      ))}
    </div>
  )
}

export default ListProducts
