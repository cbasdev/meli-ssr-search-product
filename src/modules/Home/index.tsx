import React from 'react'
import logoHome from '@/assets/img/logo_homecom_v2.png'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <div className=' flex flex-col justify-center items-center my-56'>
        <div>
          <Image
            src={logoHome}
            unoptimized
            width={387}
            height={338}
            alt='Logo Homecom'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
