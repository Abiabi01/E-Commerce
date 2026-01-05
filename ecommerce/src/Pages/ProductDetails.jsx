import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams(); // product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  // LOADING STATE
  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading product details...
      </div>
    );
  }

  // ERROR STATE
  if (!product) {
    return (
      <div className="text-center py-20 text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* LEFT - PRODUCT IMAGE */}
      <div className="flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>

      {/* RIGHT - PRODUCT INFO */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {product.title}
        </h1>

        <p className="text-gray-500 mt-2 capitalize">
          Category: {product.category}
        </p>

        <div className="flex items-center gap-4 mt-4">
          <p className="text-3xl font-bold text-purple-600">
            ${product.price}
          </p>

          {product.discountPercentage && (
            <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {Math.round(product.discountPercentage)}% OFF
            </span>
          )}
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center gap-4 mt-6">
          <span className="text-yellow-500 font-semibold">
            ⭐ {product.rating}
          </span>
          <span className="text-gray-500">
            Stock: {product.stock}
          </span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 mt-8">
          <button className="bg-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-500 transition">
            Add to Cart
          </button>

          <button className="border border-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
