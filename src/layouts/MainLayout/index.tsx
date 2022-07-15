import React from 'react'
import Header from '@/components/Header'

interface IMainLayout {
  children: JSX.Element
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className='bg-gray-200 min-h-screen'>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
