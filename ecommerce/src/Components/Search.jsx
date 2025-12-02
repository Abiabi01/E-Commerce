import { SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import SearchSuggestion from './SearchSuggestion'

const Search = () => {
    const [text,setText] = useState("")

  return (
    <div className='flex gap-2'>
        <input className='border-2 border-gray-400 rounded-xl w-48 h-8 p-2 text-black' onChange={(e) => setText(e.target.value)}></input>    
        <SearchIcon className='w-8 h-8 bg-pink-200 text-violet-700 rounded-full p-2'></SearchIcon>
        {text && 
        <SearchSuggestion query={text}/>}
    </div>
  )
}

export default Search
