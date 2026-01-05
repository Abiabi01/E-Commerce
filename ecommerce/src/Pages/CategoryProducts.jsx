import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsGrid from "../Components/Productgrid";
const CategoryProducts = () => {
  const { name } = useParams(); // category name from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${name}`
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [name]); // refetch when category changes

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {name.replace("-", " ")}
      </h1>

      <ProductsGrid products={products} loading={loading} />
    </div>
  );
};

export default CategoryProducts;
