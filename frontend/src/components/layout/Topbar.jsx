import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';

const Topbar = () => {
  return (
    <div className='bg-rabbit-red text-white'>
        <div className='container mx-auto flex justify-between items-center py-3'>
            <div className='hidden md:flex items-center space-x-4'>
                <a href="#" className='hover:text-gray-300'>
                    <TbBrandMeta className='w-5 h-5' />
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <IoLogoInstagram className='w-5 h-5' />
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <RiTwitterXLine className='w-5 h-5' />
                </a>
            </div>
            <div className='text-sm text-center flex-grow'>
              <span>We Shipping Worldwide - Fast Relaiable Shipping!</span>
            </div>
            <div className='text-sm hidden md:block'>
              <a href="#" className='hover:text-gray-300'>
                123 456 789
              </a>
            </div>
        </div>
    </div>
  )
}

export default Topbar