import { useRouter } from 'next/router'

const Product = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <h1>producto {id}</h1>
    </div>
  )
}

export default Product
