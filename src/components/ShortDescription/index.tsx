import { useMoney } from '@/hooks/useMoney'
import { IProduct } from '@/types/Product'

interface IShortDescription {
  productDetail: IProduct
}

const ShortDescription = ({ productDetail }: IShortDescription) => {
  const { formatter } = useMoney('es-CO')
  return (
    <div className='font-light'>
      <span className='text-sm text-gray-100 font-thin'>
        {productDetail.condition ? 'Nuevo' : 'Usado'} |{' '}
        {`${productDetail.sold_quantity} vendidos`}
      </span>
      <h2 className=' font-semibold text-2xl'>{productDetail.title}</h2>

      <del className='text-gray-100 font-thin'>
        {formatter.format(productDetail.price)}
      </del>
      <div className='flex items-center gap-3'>
        <p className='font-thin text-4xl'>
          {formatter.format(productDetail.price)}
        </p>
        <p className='text-green-50 font-extralight'>0% OFF</p>
      </div>
      <div className='flex gap-2 my-4'>
        Color: <p className='font-medium'>Único</p>
      </div>
    </div>
  )
}

export default ShortDescription
