import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import logo from '../assets/logo.png'
import { useCart } from '../Context/CartContext'
import { ShoppingCart, User2Icon } from 'lucide-react'

const Navbar = () => {
  const { totalItems } = useCart()

  return (
    <div className='flex w-full h-20 shadow-lg items-center justify-between px-10 bg-white'>
      
      {/* LOGO */}
      <div className='flex items-center gap-3'>
        <img src={logo} alt='logo' className='w-14 h-14' />
        <span className='font-serif text-3xl bg-gradient-to-r from-yellow-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text tracking-wide'>
          COOL SHOPPING
        </span>
      </div>

      {/* SEARCH */}
      <Search />

      {/* CATEGORIES */}
      <div className='flex gap-5 text-xl font-serif'>
        <Link to='/category/beauty'>Beauty</Link>
        <Link to='/category/fragrances'>Fragrance</Link>
        <Link to='/category/furniture'>Furniture</Link>
        <Link to='/category/groceries'>Groceries</Link>
      </div>

      {/* CART + LOGIN */}
      <div className='flex gap-6 text-xl font-serif items-center'>
        
        {/* CART ICON WITH COUNT */}
        <Link to='/cart' className='relative'>
          <ShoppingCart size={26} />
          {totalItems > 0 && (
            <span className='absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full'>
              {totalItems}
            </span>
          )}
        </Link>

        {/* LOGIN ICON */}
        <Link to='/login'>
          <User2Icon size={26} />
        </Link>

      </div>
    </div>
  )
}

export default Navbar
