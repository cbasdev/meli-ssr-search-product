import React from 'react'

interface PropsProductDescription {
  description: string
}

const ProductDescription = ({ description }: PropsProductDescription) => {
  return (
    <div className=' bg-white-0 p-10 m-10 max-w-screen-xl rounded-md'>
      <h2>{description}</h2>
    </div>
  )
}

export default ProductDescription
