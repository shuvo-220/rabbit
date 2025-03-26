import React from 'react'
import {HiShoppingBag, HiArrowCircleDown} from 'react-icons/hi';

const FeaturesSection = () => {
  return <scetion className='py-16 px-4 bg-white'>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
      {/* feature 1 */}
      <div className='flex flex-col items-center'>
        <div className='p-4 rounded-full mb-4'>
          <HiShoppingBag className='text-xl' />
        </div>
        <h4 className='tracking-tighter mb-2'>
          45 DAYS RETURN
        </h4>
        <p className='text-gray-600 text-sm tracking-tighter'>
          On all orders over $100.00
        </p>
      </div>

      <div className='flex flex-col items-center'>
        <div className='p-4 rounded-full mb-4'>
          <HiArrowCircleDown className='text-xl' />
        </div>
        <h4 className='tracking-tighter mb-2'>
          FREE INTERNATIONAL SHIPPING
        </h4>
        <p className='text-gray-600 text-sm tracking-tighter'>
          On all orders over $100.00
        </p>
      </div>

      <div className='flex flex-col items-center'>
        <div className='p-4 rounded-full mb-4'>
          <HiShoppingBag className='text-xl' />
        </div>
        <h4 className='tracking-tighter mb-2'>
          FREE INTERNATIONAL SHIPPING
        </h4>
        <p className='text-gray-600 text-sm tracking-tighter'>
          On all orders over $100.00
        </p>
      </div>
    </div>
  </scetion>
}

export default FeaturesSection