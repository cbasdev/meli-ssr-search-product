import React from 'react'
import Image from 'next/image'

/** Types */
import { IProduct } from '@/types/Product'

/** Hooks */
import { useMoney } from '@/hooks/useMoney'
import { useRouter } from 'next/router'

/** Assets */
import defaultImage from '@/assets/img/product-delivery.svg'

/** Components */
import MLButton, { ButtonType } from '@/meli-ui/MLButton'

interface PropsProductItem {
  product: IProduct
  border: boolean
  width?: number
  height?: number
  showButton?: boolean
}

const ProductItem = ({
  product,
  border,
  width,
  height,
  showButton,
}: PropsProductItem) => {
  const router = useRouter()

  const { formatter } = useMoney('es-CO')

  function showDetails(id: string) {
    if (router.query.id !== id) {
      router.push({
        pathname: `/items/${id}`,
      })
    }
  }

  return (
    <div className={'flex gap-5 ' + (border && 'border-b')}>
      <div
        className='my-4 cursor-pointer'
        onClick={() => showDetails(product.id)}
      >
        <Image
          src={product.thumbnail ? product.thumbnail : defaultImage}
          alt='image-alt-text'
          width={width ? width : 100}
          height={height ? height : 100}
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
        {showButton && (
          <div className='flex flex-col gap-2 my-3'>
            <MLButton variant={ButtonType.Primary} text='Comprar ahora' />
            <MLButton
              variant={ButtonType.Secondary}
              text='Agregar al carrito'
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductItem
