import React from 'react'
import { BsTruck, BsTrophy } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'

/** Components */
import MELIButton from '@/meli-ui/MLButton'

/** Types */
import { ButtonType } from '@/meli-ui/MLButton'

/** Assets */
import { TbArrowBack } from 'react-icons/tb'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'

const PayMethodProduct = () => {
  return (
    <div className='border border-gray-200 rounded-md p-4 ml-2 font-thin min-w-max'>
      <p>Hasta 48 cuotas</p>
      <p className='text-sm text-blue-50'>Más información</p>

      <div className='flex gap-1 my-3'>
        <div className='w-5 '>
          <BsTruck fontSize={20} className='text-green-50 mt-0.5' />
        </div>
        <div className='leading-5'>
          <p className='text-green-50'>Envío gratis a nivel nacional</p>
          <p className='text-gray-100 text-sm leading-5'>
            Conoce los tiempos y las formas de <br /> envío
          </p>
          <div className='flex text-blue-50 gap-1 text-sm'>
            <GoLocation /> <p>Calcular cuándo llega</p>
          </div>
        </div>
      </div>

      <p className='font-medium'>Stock disponible</p>
      <div className='flex text-sm'>
        Cantidad: <p className='font-semibold mx-2'>1 unidad</p>
      </div>
      <div className='flex flex-col gap-2 my-3'>
        <MELIButton variant={ButtonType.Primary} text='Comprar ahora' />
        <MELIButton variant={ButtonType.Secondary} text='Agregar al carrito' />
      </div>
      <div className=' text-sm text-gray-100 flex flex-col gap-2'>
        <div className='flex flex-2 '>
          <TbArrowBack className=' text-base mr-2 mt-1' />
          <div>
            <p className='text-blue-50'>Devolución gratis</p>
            <p>Tienes 30 días desde que lo recibes.</p>
          </div>
        </div>
        <div className='flex flex-2'>
          <IoShieldCheckmarkOutline className=' text-base mr-2 mt-1' />
          <div>
            <p className='text-blue-50'>Devolución gratis</p>
            <p>Tienes 30 días desde que lo recibes.</p>
          </div>
        </div>
        <div className='flex flex-2'>
          <BsTrophy className=' text-base mr-2 mt-1' />
          <div>
            <p className='text-blue-50'>Devolución gratis</p>
            <p>Tienes 30 días desde que lo recibes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayMethodProduct
