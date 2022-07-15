import { useState } from 'react'
import Image from 'next/image'

interface IMagnifierImg {
  src: string
  width?: string
  height?: string
  magnifierHeight: number
  magnifierWidth: number
  zoomLevel: number
}

const MagnifierImg = ({
  src,
  width,
  height,
  magnifierHeight,
  magnifierWidth,
  zoomLevel,
}: IMagnifierImg) => {
  const [[x, y], setXY] = useState([0, 0])
  const [[imgWidth, imgHeight], setSize] = useState([0, 0])
  const [showMagnifier, setShowMagnifier] = useState(false)

  return (
    <div className='max-w-md w-screen flex justify-center'>
      {src && (
        <div>
          <div>
            <Image
              height={height}
              width={width}
              unoptimized
              src={src}
              alt='Producto'
              onMouseEnter={(e) => {
                // update image size and turn-on magnifier
                const elem = e.currentTarget
                const { width, height } = elem.getBoundingClientRect()
                setSize([width, height])
                setShowMagnifier(true)
              }}
              onMouseMove={(e) => {
                const elem = e.currentTarget
                const { top, left } = elem.getBoundingClientRect()
                const x = e.pageX - left - window.pageXOffset
                const y = e.pageY - top - window.pageYOffset
                setXY([x, y])
              }}
              onMouseLeave={() => {
                setShowMagnifier(false)
              }}
            />
          </div>
          <div
            style={{
              display: showMagnifier ? '' : 'none',
              position: 'absolute',
              pointerEvents: 'none',
              height: `${magnifierHeight}px`,
              width: `${magnifierWidth}px`,
              top: `${y}px`,
              left: `${x + 300}px`,
              opacity: '1', // reduce opacity so you can verify position
              border: '1px solid lightgray',
              backgroundColor: 'white',
              backgroundImage: `url('${src}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${imgWidth * zoomLevel}px ${
                imgHeight * zoomLevel
              }px`,
              backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
            }}
          ></div>
        </div>
      )}
    </div>
  )
}

export default MagnifierImg
