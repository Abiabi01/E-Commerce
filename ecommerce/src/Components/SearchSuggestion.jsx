import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const SearchSuggestion = ({query}) => {
    const[results,setResults] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            try{
                console.log("query",query)
                const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
                const data = response.data.products
                console.log(data);
                setResults(data)
            }catch(e){
                console.log("error",e)
            }
        }
        fetchData()
    },[query])
  return (
    <div className='mt-10 p-5 bg-white border-2 border-gray-400 rounded-lg text-black absolute w-48 max-h-60 overflow-y-auto'>
       {results.map((item) => (
        <Link key={item.id} to={`/product/${item.id}`} className='flex flex-col border-0 p-1 rounded-xl text-sm font-sans hover:bg-gray-300'>{item.title}</Link>
       ))}
    </div>
  )
}

export default SearchSuggestion
