import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import ProductsGrid from '../Components/Productgrid'

const Products = () => {
  const { search } = useLocation()
  const q = new URLSearchParams(search).get('q') || ''
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const url = q
          ? `https://dummyjson.com/products/search?q=${encodeURIComponent(q)}`
          : `https://dummyjson.com/products?limit=100`
        const res = await axios.get(url)
        const data = q ? res.data.products : res.data.products
        setProducts(data || [])
      } catch (e) {
        console.error('Products fetch error', e)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [q])

  return (
    <div className='p-6'>
      {q ? (
        <h2 className='text-2xl mb-4'>Search results for "{q}"</h2>
      ) : (
        <h2 className='text-2xl mb-4'>All Products</h2>
      )}

      <ProductsGrid products={products} loading={loading} />
    </div>
  )
}

export default Products
