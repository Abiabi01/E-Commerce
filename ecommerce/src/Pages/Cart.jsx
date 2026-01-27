import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/format";
import { MAX_QUANTITY } from "../utils/constants";

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
    totalItems,
  } = useCart();
  const navigate = useNavigate();

  // EMPTY CART
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 text-xl mb-6">Your cart is empty 🛒</p>
        <button
          onClick={() => navigate("/products")}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const handleCheckout = () => {
    // TODO: Integrate with payment gateway
    alert('Proceeding to checkout. (Payment integration coming soon)');
    // navigate('/checkout');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CART ITEMS */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white p-4 rounded-xl shadow"
            >
              {/* IMAGE */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-contain bg-gray-100 rounded-lg p-2"
                loading="lazy"
              />

              {/* DETAILS */}
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-500">{formatPrice(item.price)}</p>

                {/* QUANTITY CONTROLS */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 border rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label={`Decrease quantity of ${item.title}`}
                  >
                    −
                  </button>

                  <span className="font-semibold" aria-label={`Quantity: ${item.quantity}`}>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    disabled={item.quantity >= MAX_QUANTITY}
                    className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label={`Increase quantity of ${item.title}`}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* SUBTOTAL & REMOVE */}
              <div className="text-right">
                <p className="font-semibold text-purple-600 mb-2">
                  {formatPrice(item.price * item.quantity)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold focus:outline-none focus:underline"
                  aria-label={`Remove ${item.title} from cart`}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow h-fit sticky top-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Total Items</span>
            <span className="font-semibold">{totalItems}</span>
          </div>

          <div className="flex justify-between mb-4 pb-4 border-b">
            <span className="text-gray-600">Total Price</span>
            <span className="font-bold text-purple-700 text-lg">
              {formatPrice(totalPrice)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Proceed to checkout"
          >
            Proceed to Checkout
          </button>

          <button
            onClick={() => navigate("/products")}
            className="w-full mt-3 border-2 border-purple-600 text-purple-600 py-2 rounded-xl font-semibold hover:bg-purple-50 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
