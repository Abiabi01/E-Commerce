import { SearchIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchSuggestion from './SearchSuggestion';
import { useDebounce } from '../hooks/useDebounce';

const Search = () => {
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);
  const debouncedText = useDebounce(text, 300);
  const navigate = useNavigate();

  const onSelectSuggestion = (item) => {
    // console.log('Suggestion selected:', item);
    setText(item?.title || '');
    setShow(false);
  };

  const doSearch = () => {
    setShow(false);
    if (text && text.trim()) {
      navigate(`/products?q=${encodeURIComponent(text.trim())}`);
      setText('');
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      doSearch();
    }
  };

  const handleFocus = () => {
    if (text && text.trim()) {
      setShow(true);
    }
  };

  const handleBlur = () => {
    // Delay hiding so clicks on suggestions register first
    setTimeout(() => setShow(false), 150);
  };

  return (
    <div className='relative flex gap-2'>
      <input
        value={text}
        onChange={(e) => {
          const v = e.target.value;
          setText(v);
          if (v && v.trim()) setShow(true);
          else setShow(false);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={onKeyDown}
        className='border-2 border-gray-400 rounded-xl w-48 h-8 p-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-500'
        placeholder='Search products...'
        aria-label='Search products'
        autoComplete='off'
      />

      <button 
        type="button" 
        onClick={doSearch} 
        aria-label='Search'
        className='focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full'
      >
        <SearchIcon className='w-8 h-8 bg-pink-200 text-violet-700 rounded-full p-2' />
      </button>

      {show && debouncedText && debouncedText.trim() && (
        <SearchSuggestion query={debouncedText} onSelect={onSelectSuggestion} />
      )}
    </div>
  );
};

export default Search;
