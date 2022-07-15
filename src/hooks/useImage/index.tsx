import React from 'react'
import Image, { StaticImageData } from 'next/image'

type loaderType = {
  image: StaticImageData
  width?: number
  height?: number
  quality?: number
  alt?: string
  fill?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | undefined
}

export function useImage({
  image,
  width,
  height,
  quality,
  alt,
  fill,
}: loaderType) {
  const optimization = () => {
    return `${image.src}?w=${width}&q=${quality || 75}`
  }

  const ImageOptimized = () => {
    return (
      <>
        <Image
          loader={optimization}
          layout={fill}
          src={image}
          width={width}
          height={height}
          alt={alt}
        />
      </>
    )
  }

  return { ImageOptimized }
}
