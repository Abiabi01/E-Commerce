import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Products from '../src/Pages/Products'
import ProductDetails from '../src/Pages/ProductDetails'
import Navbar from "./Components/Navbar";
import CategoryProducts from '../src/Pages/CategoryProducts'
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { CartProvider } from "./Context/CartContext";

const App = () => {
  return(
    <CartProvider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>

  )
}
export default App