import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='flex flex-row w-full h-20 shadow-lg items-center justify-between px-10'>
            <div className='flex items-center gap-3'>
                <img src={logo} alt='logo' className='w-14 h-14' />
                <span className='font-serif text-3xl bg-gradient-to-r from-yellow-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text tracking-wide'>
                    COOL SHOPPING
                </span>
            </div>
            <Search />
            <div className='flex gap-5 text-xl font-serif'>
                <Link to='/category/beauty'>Beauty</Link>
                <Link to='/category/fragrance'>Fragrance</Link>
                <Link to='/category/furniture'>Furniture</Link>
                <Link to='/category/groceries'>Groceries</Link>
                <Link to='/category/collections'>Collections</Link>
            </div>
            <div className='flex gap-5 text-xl font-serif'>
                <Link to='/cart'>Cart</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default Navbar
