import { useCart } from "../Context/CartContext";
const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
    totalItems,
  } = useCart();

  // EMPTY CART
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        Your cart is empty 🛒
      </div>
    );
  }

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
              />

              {/* DETAILS */}
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-500">${item.price}</p>

                {/* QUANTITY CONTROLS */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 border rounded hover:bg-gray-200"
                  >
                    −
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 border rounded hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Total Price</span>
            <span className="font-bold text-purple-700">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
