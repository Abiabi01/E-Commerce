import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../utils/constants';

const SearchSuggestion = ({ query, onSelect }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || !query.trim()) {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        );
        const data = response.data.products || [];
        setResults(data);
      } catch (e) {
        if (e.name !== 'CanceledError') {
          console.error('Search suggestion error', e);
          setResults([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup: abort fetch if component unmounts
    return () => controller.abort();
  }, [query]);

  return (
    <div 
      className='mt-10 p-2 bg-white border-2 border-gray-400 rounded-lg text-black absolute w-48 max-h-60 overflow-y-auto z-20'
      role="listbox"
      aria-label="Search suggestions"
    >
      {loading && <div className='text-sm p-2 text-gray-500'>Loading...</div>}
      {!loading && results.length === 0 && (
        <div className='text-sm p-2 text-gray-500'>No suggestions</div>
      )}

      {results.map((item) => (
        <Link
          key={item.id}
          to={`/product/${item.id}`}
          onClick={() => onSelect && onSelect()}
          className='block border-0 p-2 rounded-xl text-sm font-sans hover:bg-gray-200 focus:outline-none focus:bg-gray-200'
          role="option"
          aria-selected="false"
          title={item.title}
        >
          {item.title.substring(0, 40)}
          {item.title.length > 40 ? '...' : ''}
        </Link>
      ))}
    </div>
  );
};

export default SearchSuggestion;
