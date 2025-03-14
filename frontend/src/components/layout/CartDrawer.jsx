import React, { useState } from 'react'
import {IoMdClose} from 'react-icons/io'

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
  //   const[drawerOpen, setDrawerOpen] = useState(false);

  // const toggleCartDrawer=()=>{
  //   setDrawerOpen(!drawerOpen);
  // }

  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? 'translate-x-0':'translate-x-full'}`}>
      {/* close button */}
      <div className='flex justify-end p-4'>
        <button onClick={toggleCartDrawer}>
          <IoMdClose className='w-6 h-6 text-gray-600' />
        </button>
      </div>
      {/* cart content */}
      <div className=''></div>
    </div>

  )
}

export default CartDrawer