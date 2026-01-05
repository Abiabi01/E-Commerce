import { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import CategoryBlocks from "../Components/CatogoryBlocks";
import ProductsGrid from "../Components/Productgrid";
const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=8");
      const data = await res.json();
      setFeaturedProducts(data.products);
      setLoading(false);
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div>
      <HeroBanner />
      <CategoryBlocks />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <ProductsGrid products={featuredProducts} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
