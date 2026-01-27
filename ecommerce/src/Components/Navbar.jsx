import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from '../assets/logo.png';
import { useCart } from '../Context/CartContext';
import { useAuth } from '../Context/AuthContext';
import { ShoppingCart, User2Icon, LogOut } from 'lucide-react';

const Navbar = () => {
  const { totalItems } = useCart();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  return (
    <div className='flex w-full h-20 shadow-lg items-center justify-between px-10 bg-white sticky top-0 z-10'>
      {/* LOGO */}
      <Link to='/' className='flex items-center gap-3 hover:opacity-80 transition'>
        <img src={logo} alt='Cool Shopping logo' className='w-14 h-14' />
        <span className='font-serif text-3xl bg-gradient-to-r from-yellow-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text tracking-wide hidden sm:block'>
          COOL SHOPPING
        </span>
      </Link>

      {/* SEARCH */}
      <Search />

      {/* CATEGORIES */}
      <div className='flex gap-5 text-xl font-serif hidden lg:flex'>
        <Link 
          to='/category/beauty'
          className='hover:text-purple-600 transition'
          aria-label='Browse Beauty products'
        >
          Beauty
        </Link>
        <Link 
          to='/category/fragrances'
          className='hover:text-purple-600 transition'
          aria-label='Browse Fragrance products'
        >
          Fragrance
        </Link>
        <Link 
          to='/category/furniture'
          className='hover:text-purple-600 transition'
          aria-label='Browse Furniture products'
        >
          Furniture
        </Link>
        <Link 
          to='/category/groceries'
          className='hover:text-purple-600 transition'
          aria-label='Browse Groceries products'
        >
          Groceries
        </Link>
      </div>

      {/* CART + AUTH */}
      <div className='flex gap-6 text-xl font-serif items-center'>
        {/* CART ICON WITH COUNT */}
        <Link 
          to='/cart' 
          className='relative hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-500 rounded p-1'
          aria-label={`Shopping cart with ${totalItems} items`}
        >
          <ShoppingCart size={26} />
          {totalItems > 0 && (
            <span 
              className='absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full'
              aria-label={`${totalItems} items in cart`}
            >
              {totalItems}
            </span>
          )}
        </Link>

        {/* LOGIN/LOGOUT ICON */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className='hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-500 rounded p-1'
            aria-label='Logout'
            title='Logout'
          >
            <LogOut size={26} />
          </button>
        ) : (
          <Link
            to='/login'
            className='hover:text-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-500 rounded p-1'
            aria-label='Login'
          >
            <User2Icon size={26} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
