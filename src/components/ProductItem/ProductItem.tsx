import React from 'react'
import { IProduct } from '@/types/Product'
import Image from 'next/image'
import { useMoney } from '@/hooks/useMoney'
import { useRouter } from 'next/router'

interface PropsProductItem {
  product: IProduct
  border: boolean
}

const ProductItem = ({ product, border }: PropsProductItem) => {
  const router = useRouter()

  const { formatter } = useMoney('es-CO')

  function showDetails(id: string) {
    console.log(id, 'details')
    router.push({
      pathname: `/items/${id}`,
    })
  }

  return (
    <div className={'flex gap-5 ' + (border && 'border-b')}>
      <div
        className='my-4 cursor-pointer'
        onClick={() => showDetails(product.id)}
      >
        <Image
          src={product.thumbnail}
          alt='image-alt-text'
          width={100}
          height={100}
          unoptimized
        />
      </div>
      <div className='flex flex-col gap-1 justify-center font-light'>
        <h2
          className='font-extralight text-xl cursor-pointer'
          onClick={() => showDetails(product.id)}
        >
          {product.title}
        </h2>
        <p className='text-2xl'>{formatter.format(product.price)}</p>
      </div>
    </div>
  )
}

export default ProductItem
