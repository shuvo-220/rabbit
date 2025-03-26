import React from 'react'
import { Link } from 'react-router-dom'
import featured from '../../assets/featured.webp'

const FeaturedCollection = () => {
  return <section className='py-16 container'>
    <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl'>
        {/* left content */}
        <div className='lg:w-1/2 p-8 text-center lg:text-left'>
            <h2 className='text-lg font-semibold text-gray-700 mb-2'>
                Comfort and Style
            </h2>
            <h2 className='text-3xl lg:text-5xl font-bold mb-6'>
                Apprel made for your everyday life 
            </h2>
            <p className='text-lg text-gray-600 mb-6'>
                Discover high quality, comfortable clothing that effortlesly blends 
                fashion and function. Design to make you look and feel great 
                everyday.
            </p>
            <Link to='/collection/all' 
            className='bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800'
            >Shop Now</Link>
        </div>
        {/* right content */}
        <div className='lg:w-1/2 '>
            <img src={featured} alt='img'
            className='w-full h-full object-cover lg:rounded-tr-xl lg:rounded-br-3xl '
            />
        </div>
    </div>
  </section>
}

export default FeaturedCollection