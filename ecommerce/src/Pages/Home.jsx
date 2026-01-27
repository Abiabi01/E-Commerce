import { useEffect, useState } from "react";
import HeroBanner from "../Components/HeroBanner";
import CategoryBlocks from "../Components/CategoryBlocks";
import ProductsGrid from "../Components/Productgrid";
import Spinner from "../Components/Spinner";
import ErrorMessage from "../Components/ErrorMessage";
import { API_BASE_URL, FEATURED_LIMIT } from "../utils/constants";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${API_BASE_URL}/products?limit=${FEATURED_LIMIT}`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch featured products');
        }

        const data = await res.json();
        setFeaturedProducts(data.products || []);
      } catch (err) {
        console.error('Error fetching featured products:', err);
        setError(err.message || 'Failed to load featured products');
        setFeaturedProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const handleRetry = () => {
    setError(null);
    window.location.reload();
  };

  return (
    <div>
      <HeroBanner />
      <CategoryBlocks />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        
        {error && <ErrorMessage message={error} onRetry={handleRetry} />}
        
        {loading ? (
          <Spinner size="md" />
        ) : (
          <ProductsGrid products={featuredProducts} loading={false} />
        )}
      </div>
    </div>
  );
};

export default Home;
