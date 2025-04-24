import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import CartContents from '../cart/CartContents'

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  //   const[drawerOpen, setDrawerOpen] = useState(false);

  // const toggleCartDrawer=()=>{
  //   setDrawerOpen(!drawerOpen);
  // }
  const navigate = useNavigate();
  const handleCheckout=()=>{
    navigate('/checkout')
  }

  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-[38rem] md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* close button */}
      <div className='flex justify-end p-4'>
        <button onClick={toggleCartDrawer}>
          <IoMdClose className='w-6 h-6 text-gray-600' />
        </button>
      </div>
      {/* cart content */}
      <div className='flex-grow p-4 overflow-y-auto'>
        <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
        {/* content for cart components */}
        <CartContents />
      </div>
      {/* checkout button */}
      <div className='p-4 bg-white sticky bottom-0'>
        <button
          onClick={handleCheckout}
          className='w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition'>
          Checkout
        </button>
        <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>shipping, discount and taxes calculated at checkout</p>
      </div>
    </div>

  )
}

export default CartDrawer