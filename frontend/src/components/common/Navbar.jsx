import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2';
import SearchBar from './SearchBar';
import CartDrawer from '../layout/CartDrawer';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {

   const[drawerOpen, setDrawerOpen] = useState(false);
  //  const[navDrawerOpen, setNavDrawerOpen] = useState(false);

  //  const toggleNavbarDrawer=()=>{
  //   setNavDrawerOpen(!navDrawerOpen);
  //  }
  
    const toggleCartDrawer=()=>{
      setDrawerOpen(!drawerOpen);
    }

  return (
    <>
    <nav className='container mx-auto flex items-center justify-between py-4'>
      {/* left logo */}
      <div>
        <Link to='/' className='text-2xl font-medium'>rabbit</Link>
      </div>
      {/* center navbar links */}
      <div className='hidden md:flex space-x-6 '>
        <Link to='/collections/all' className='text-gray-700 hover:text-black text-sm font-medium uppercase '>
          men
        </Link>
        <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase '>
          women
        </Link>
        <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase '>
          top wesr
        </Link>
        <Link to='#' className='text-gray-700 hover:text-black text-sm font-medium uppercase '>
          bottom wear
        </Link>
      </div>
      {/* right icons */}
      <div className='flex items-center space-x-4'>
        <Link to='/admin' className='block bg-black text-white px-2 rounded text-sm'>Admin</Link>
        <Link to='/profile' className='hover:text-black'>
          <HiOutlineUser className='w-6 h-6' />
        </Link>
        <button onClick={toggleCartDrawer} className='relative hover:text-black'>
          <HiOutlineShoppingBag className='w-6 h-6 text-gray-700' />
          <span className='absolute -top-3 bg-rabbit-red text-white text-sx rounded-full px-2 py-0.5'>5</span>
        </button>
        {/* search */}
        <div className='overflow-hidden'>
          <SearchBar />
        </div>
        <button className='md:hidden'>
          <HiBars3BottomRight className='w-6 h-6 text-gray-700' />
        </button>
      </div>
    </nav>
    <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

    {/* mobile navigation */}
    {/* <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${drawerOpen? 'translate-x-0':'-translate-x-full'}`}>
      <div className='flex justify-end p-4'>
        <button>
          <IoMdClose className='w-6 h-6 text-gray-600' />
        </button>
      </div>
    </div> */}

    </>
  )
}

export default Navbar