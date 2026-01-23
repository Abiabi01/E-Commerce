import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from '../src/Pages/Products';
import ProductDetails from '../src/Pages/ProductDetails';
import Navbar from "./Components/Navbar";
import CategoryProducts from '../src/Pages/CategoryProducts';
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import Footerbar from "./Components/Footbar";
import ProtectedRoute from "./Components/ProtectedRoute";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />} />
      <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" replace />} />
      
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      
      <Route path="/products" element={
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      } />
      
      <Route path="/product/:id" element={
        <ProtectedRoute>
          <ProductDetails />
        </ProtectedRoute>
      } />
      
      <Route path="/category/:name" element={
        <ProtectedRoute>
          <CategoryProducts />
        </ProtectedRoute>
      } />
      
      <Route path="/cart" element={
        <ProtectedRoute>
          <Cart />
        </ProtectedRoute>
      } />
      
      {/* Redirect any other route to home if authenticated, or to login if not */}
      <Route path="*" element={
        isAuthenticated ? <Navigate to="/" replace /> : <Navigate to="/login" replace />
      } />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          <Footerbar />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;