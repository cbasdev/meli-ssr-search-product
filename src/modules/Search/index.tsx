import React, { useState, useEffect } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import MLInput from '@/meli-ui/MLInput'
import { useRouter } from 'next/router'

const SearchModule = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 400)

  useEffect(() => {
    if (debouncedSearch) {
      /**
       * If i need search in real time
       */
    }
  }, [debouncedSearch])

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    router.push({
      pathname: '/items',
      query: { search },
    })
  }

  return (
    <div className=' w-full'>
      <form onSubmit={handleSubmit}>
        <MLInput
          onChange={(e) => setSearch(e.target.value)}
          onClick={handleSubmit}
          placeholder='Buscar productos, marcas y más...'
          name='search'
        />
      </form>
    </div>
  )
}

export default SearchModule
