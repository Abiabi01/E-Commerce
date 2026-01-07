import { SearchIcon } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchSuggestion from './SearchSuggestion'

const Search = () => {
  const [text, setText] = useState("")
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const debounceRef = useRef(null)

  useEffect(() => {
    if (!text || !text.trim()) {
      setShow(false)
      return
    }

    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => setShow(true), 200)
    return () => clearTimeout(debounceRef.current)
  }, [text])

  const onSelectSuggestion = () => {
    setShow(false)
  }

  const doSearch = () => {
    setShow(false)
    if (text && text.trim()) {
      navigate(`/products?q=${encodeURIComponent(text.trim())}`)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      doSearch()
    }
  }

  return (
    <div className='relative flex gap-2'>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => text && text.trim() && setShow(true)}
        onKeyDown={onKeyDown}
        className='border-2 border-gray-400 rounded-xl w-48 h-8 p-2 text-black'
        placeholder='Search products...'
      />

      <button type="button" onClick={doSearch} aria-label='search'>
        <SearchIcon className='w-8 h-8 bg-pink-200 text-violet-700 rounded-full p-2' />
      </button>

      {show && text && text.trim() && (
        <SearchSuggestion query={text} onSelect={onSelectSuggestion} />
      )}
    </div>
  )
}

export default Search
