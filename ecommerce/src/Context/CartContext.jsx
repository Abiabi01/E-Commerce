import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const safeNumber = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  const sanitizeItem = (item) => ({
    id: item.id,
    title: item.title || "Untitled",
    price: safeNumber(item.price),
    thumbnail: item.thumbnail || "",
    quantity: Math.max(1, safeNumber(item.quantity)),
  });

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (!storedCart) return [];
    try {
      const parsed = JSON.parse(storedCart);
      if (!Array.isArray(parsed)) return [];
      return parsed.map(sanitizeItem);
    } catch (e) {
      return [];
    }
  });

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ADD TO CART
  const addToCart = (product) => {
    if (!product || typeof product !== "object") return;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Number(item.quantity) + 1 }
            : item
        );
      }

      return [
        ...prev,
        sanitizeItem({
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: 1,
        }),
      ];
    });
  };
  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // INCREASE QUANTITY
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Number(item.quantity) + 1 }
          : item
      )
    );
  };

  // DECREASE QUANTITY
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: Number(item.quantity) - 1 }
          : item
      )
    );
  };

  // TOTAL ITEMS COUNT
  const totalItems = cartItems.reduce(
    (total, item) => total + safeNumber(item.quantity),
    0
  );

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) => total + safeNumber(item.price) * safeNumber(item.quantity),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

