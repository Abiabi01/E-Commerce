import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SearchSuggestion = ({ query, onSelect }) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            if (!query || !query.trim()) {
                setResults([])
                return
            }

            try {
                setLoading(true)
                const response = await axios.get(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
                const data = response.data.products || []
                setResults(data)
            } catch (e) {
                console.error('Search suggestion error', e)
                setResults([])
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [query])

    return (
        <div className='mt-10 p-2 bg-white border-2 border-gray-400 rounded-lg text-black absolute w-48 max-h-60 overflow-y-auto z-20'>
            {loading && <div className='text-sm p-2 text-gray-500'>Loading...</div>}
            {!loading && results.length === 0 && (
                <div className='text-sm p-2 text-gray-500'>No suggestions</div>
            )}

            {results.map((item) => (
                <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    onClick={() => onSelect && onSelect()}
                    className='block border-0 p-2 rounded-xl text-sm font-sans hover:bg-gray-200'
                >
                    {item.title}
                </Link>
            ))}
        </div>
    )
}

export default SearchSuggestion
