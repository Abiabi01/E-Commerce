import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductsGrid from '../Components/Productgrid';
import Spinner from '../Components/Spinner';
import ErrorMessage from '../Components/ErrorMessage';
import { API_BASE_URL, ITEMS_PER_PAGE } from '../utils/constants';

const Products = () => {
  const { search } = useLocation();
  const q = new URLSearchParams(search).get('q') || '';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = q
          ? `${API_BASE_URL}/products/search?q=${encodeURIComponent(q)}`
          : `${API_BASE_URL}/products?limit=${ITEMS_PER_PAGE}`;
        
        const res = await axios.get(url);
        const data = q ? res.data.products : res.data.products;
        setProducts(data || []);
      } catch (e) {
        console.error('Products fetch error', e);
        setError(e.message || 'Failed to load products');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [q]);

  const handleRetry = () => {
    setError(null);
  };

  return (
    <div className='p-6'>
      {q ? (
        <h2 className='text-2xl mb-4 font-semibold'>
          Search results for "{q}"
        </h2>
      ) : (
        <h2 className='text-2xl mb-4 font-semibold'>All Products</h2>
      )}

      {error && <ErrorMessage message={error} onRetry={handleRetry} />}
      
      {loading ? (
        <Spinner size="md" />
      ) : (
        <ProductsGrid products={products} loading={false} />
      )}
    </div>
  );
};

export default Products;
