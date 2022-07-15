import React from 'react'
import Link from 'next/link'

/** Modules */
import SearchModule from '@/modules/Search'

/** Assets */
import logo from '@/assets/img/logo.png'
import news from '@/assets/img/news.png'
import { IoLocationOutline } from 'react-icons/io5'

/** Hooks */
import { useImage } from '@/hooks/useImage'

const Header = () => {
  const { ImageOptimized: Logo } = useImage({
    image: logo,
    alt: 'Mercado Libre',
  })

  const { ImageOptimized: News } = useImage({
    image: news,
    alt: 'Disney Plus en Mercado Libre',
  })

  return (
    <header className='bg-primary-500 p-2'>
      <div className=' max-w-screen-xl mx-auto'>
        <div className='flex flex-1 justify-between gap-6'>
          <div className='flex w-full gap-6'>
            <div className='flex flex-col gap-3 min-w-max '>
              <div className='w-36'>
                <Link href='/'>
                  <a>
                    <Logo />
                  </a>
                </Link>
              </div>
              <div className='flex justify-center gap-1 w-full '>
                <div className='flex flex-col justify-center'>
                  <IoLocationOutline size={25} />
                </div>
                <div className='leading-3'>
                  <span className='text-xs font-normal text-gray-100'>
                    Enviar a Sebastián
                  </span>
                  <p className='text-sm  font-medium'>Calle 45 #192-31</p>
                </div>
              </div>
            </div>
            <SearchModule />
          </div>

          <div>
            <div className='w-72'>
              <News />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)
