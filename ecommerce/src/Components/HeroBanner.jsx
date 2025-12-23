import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HeroBanner = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/4"); 
        setProduct(response.data);
      } catch (e) {
        console.log("Error loading hero product:", e);
      }
      
    };
    fetchProduct();
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeIn">
          <p className="bg-white w-fit px-4 py-1 rounded-full text-sm text-purple-700 font-semibold shadow">
            SHOP TRENDING CATEGORIES
          </p>
          <h1 className="text-4xl md:text-4xl font-bold mt-4 text-gray-900 leading-tight">
            Explore Top Deals in  
            <span className="text-purple-500"> Beauty</span>,  
            <span className="text-pink-500"> Fragrance</span>,  
            <span className="text-blue-500"> Furniture </span>  
             & More
          </h1>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Discover high-quality products across beauty, fragrance, groceries, 
            and home decor — all at unbeatable prices.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              to="/products"
              className="bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-800 hover:scale-105 transition transform duration-300">
              Shop All Products
            </Link>
             
            <Link
              to="/category/beauty"
              className="border border-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 hover:text-white hover:scale-105 transition transform duration-300">
              Explore Categories
            </Link>               
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          {product ? (
            <>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-[320px] md:w-[420px] rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"/>
              <p className="mt-5 text-2xl font-semibold text-gray-900 text-center">
                {product.title}
              </p>
              <p className="text-lg text-purple-700 font-bold">
                ${product.price}
              </p>
              <Link
                to={`/product/${product.id}`}
                className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition">
                Shop This Product
              </Link>
            </>
          ) : (
            <p className="text-gray-600">Loading product...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
