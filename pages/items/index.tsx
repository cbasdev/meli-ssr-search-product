import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import ListProducts from '@/modules/Product/ListProducts'
import { IProduct } from '@/typesProduct'

const Items = () => {
  const router = useRouter()
  const { search } = router.query || ''
  const [products, setProducts] = useState([] as IProduct[])

  const fetchProducts = async (search?: string | string[]) => {
    const { data } = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({ search }),
    }).then((res) => res.json())
    data.length > 4 ? setProducts(data.slice(0, 4)) : setProducts(data)
  }

  useEffect(() => {
    fetchProducts(search)
  }, [search])

  return (
    <div>
      <ListProducts products={products} />
    </div>
  )
}

export default Items
