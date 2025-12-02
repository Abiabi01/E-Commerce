import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import logo from '../assets/logo.png'

const Navbar = () => {
    return(
        <div className='flex flex-row w-full h-20 shadow-lg items-center justify-around'>
            <div className='flex flex-row'>
                <img src={logo} alt='logo' className='w-14 h-14'/>
               <span className='m-2 font-serif text-3xl bg-gradient-to-r from-yellow-600 via-pink-500 to-indigo-400 inline-block text-transparent bg-clip-text'>COOL SHOPPING</span>
            </div>
            <div>
                <Search/>
            </div>
            <div className='flex gap-3 text-xl font-serif'>
                <Link to='/'></Link>
                <Link to='/category/:beauty'>Beauty</Link>
                <Link to ='/category/:fragrance'>Fragrance</Link>
                <Link to = '/category/:furniture'>Furniture</Link>
                <Link to = '/category/:groceries'>Groceries</Link>
            </div>
            <div className='flex gap-2'>
                <Link to='/cart'>Cart</Link>
                <Link to='/login'>Login</Link>
            </div>

        </div>
    )
}
export default Navbar