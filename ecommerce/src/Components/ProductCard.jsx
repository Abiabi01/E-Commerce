import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  const {addToCart} = useCart()

  return (
    <div className="group bg-blue-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* DISCOUNT BADGE */}
        {product.discountPercentage && (
          <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {Math.round(product.discountPercentage)}% OFF
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {product.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1 capitalize">
          {product.category}
        </p>

        {/* PRICE & RATING */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-xl font-bold text-purple-500">
            ${product.price}
          </p>

          <span className="text-sm text-yellow-500 font-semibold">
            ⭐ {product.rating}
          </span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 mt-4">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 text-center border border-purple-500 text-purple-500 py-2 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition">
            View
          </Link>

          <button
            className="flex-1 bg-purple-500 text-white py-2 rounded-lg font-medium hover:bg-purple-500 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
