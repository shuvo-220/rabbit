import React from 'react'
import {Link} from 'react-router-dom';
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import {FiPhoneCall} from 'react-icons/fi';

const Footer = () => {
  return <footer className='border-t py-12 '>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
      <div className=''>
        <h3 className='text-lg text-gray-800 mb-4 '>Newsletter</h3>
        <p className='text-gray-500 mb-4'>
          Be the first to hear about new product, elclusive events and online offers.
        </p>
        <p className='font-medium text-sm text-gray-600 mb-6'>Sing up and get 10% off your fisrt order.</p>
        {/* newsletter form */}
        <form className='flex'>
          <input type='text' placeholder='Enter Your Email' className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all' required />
          <button type='submit' className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all'>Subscribe</button>
        </form>
      </div>
      {/* shop links */}
      <div>
        <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
        <ul className='space-y-2 text-gray-600'>
          <li>
            <Link to='/#' className='hover:text-gray-500 transition-colors'>Men's Top Wear</Link>
          </li>
          <li>
            <Link to='/#' className='hover:text-gray-500 transition-colors'>Women's Top Wear</Link>
          </li>
          <li>
            <Link to='/#' className='hover:text-gray-500 transition-colors'>Men's Bottom Wear</Link>
          </li>
          <li>
            <Link to='/#' className='hover:text-gray-500 transition-colors'>Women's Bottom Wear</Link>
          </li>
        </ul>
      </div>
      {/* support link */}
      <div>
        <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
        <ul className='space-y-2 text-gray-600'>
          <li>
            <Link to='/#' className='hover:text-gray-500 transition-colors'>Contact Us</Link>
          </li>
          <li>
            <Link to='/#' className='hover:text-gray-500 transition-colors'>About Us</Link>
          </li>
          <li>
            <Link to='/#' className='hover:text-gray-500 transition-colors'>FAQs</Link>
          </li>
          <li>
            <Link to='/#' className='hover:text-gray-500 transition-colors'>Features</Link>
          </li>
        </ul>
      </div>
      {/* follow us */}
      <div>
        <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
        <div className='flex items-center space-x-4 mb-6'>
          <a href='#' className='hover:text-gray-500'>
            <TbBrandMeta className='w-5 h-5' />
          </a>
          <a href='#' className='hover:text-gray-500'>
            <IoLogoInstagram className='w-5 h-5' />
          </a>
          <a href='#' className='hover:text-gray-500'>
            <RiTwitterXLine className='w-5 h-5' />
          </a>
        </div>
        <p className='text-gray-500'>Call Us </p>
        <p>
          <FiPhoneCall className='inline-block mr-2'/>
          123 456 789
        </p>
      </div>
    </div>
    {/* footer bottom */}
    <div className='container mx-auto mt-12 border-t border-gray-200 pt-6'>
      <p className='text-gray-500 text-sm trsking-tighter text-center'>&copy;{new Date().getFullYear()} all right reserved.</p>
    </div>
  </footer>
}

export default Footer