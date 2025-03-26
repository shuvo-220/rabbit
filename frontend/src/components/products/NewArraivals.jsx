import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import {Link} from 'react-router-dom';

const NewArraivals = () => {


  const newArrivals = [
    {
      _id:1,
      name:'Stylish Jacket',
      price:120,
      images:[
        {
          url:'https://picsum.photos/500/500?random=1',
          altText:'stylish jacket'
        }
      ]
    },
    {
      _id:2,
      name:'Stylish Jacket',
      price:120,
      images:[
        {
          url:'https://picsum.photos/500/500?random=2',
          altText:'stylish jacket'
        }
      ]
    },
    {
      _id:3,
      name:'Stylish Jacket',
      price:120,
      images:[
        {
          url:'https://picsum.photos/500/500?random=3',
          altText:'stylish jacket'
        }
      ]
    },
    {
      _id:4,
      name:'Stylish Jacket',
      price:120,
      images:[
        {
          url:'https://picsum.photos/500/500?random=4',
          altText:'stylish jacket'
        }
      ]
    },
    {
      _id:5,
      name:'Stylish Jacket',
      price:120,
      images:[
        {
          url:'https://picsum.photos/500/500?random=5',
          altText:'stylish jacket'
        }
      ]
    },
    {
      _id:6,
      name:'Stylish Jacket',
      price:120,
      images:[
        {
          url:'https://picsum.photos/500/500?random=6',
          altText:'stylish jacket'
        }
      ]
    },
    {
      _id:7,
      name:'Stylish Jacket',
      price:120,
      images:[
        {
          url:'https://picsum.photos/500/500?random=7',
          altText:'stylish jacket'
        }
      ]
    },
    {
      _id:8,
      name:'Stylish Jacket',
      price:120,
      images:[
        {
          url:'https://picsum.photos/500/500?random=8',
          altText:'stylish jacket'
        }
      ]
    },
  ]

  return <section className='py-16'>
    <div className='container mx-auto text-center mb-10 relative'>
      <h2 className='text-3xl font-bold mb-4'>
        Explore New Arrivals
      </h2>
      <p className='text-lg text-gray-600 mb-8'>
        Discover the latest styles stringht off the runway, freshly add to 
        keep your wardrobe on the cutting edge of fashion.
      </p>
      {/* scroll buttons */}
      <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
        <button className='p-2 rounded border bg-white text-black'>
          <FiChevronLeft className='text-2xl' />
        </button>
        <button className='p-2 rounded border bg-white text-black'>
          <FiChevronRight className='text-2xl' />
        </button>
      </div>
    </div>
    {/* scrollable content */}
    <div className='container mx-auto overflow-x-scroll flex space-x-6 relative'>
      {
        newArrivals.map((product)=>(
          <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
            <img src={product.images[0]?.url} alt={product.name}
            className='w-full h-[500px] object-cover rounded-lg'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg'>
              <Link to={`product/${product._id}`} className='block'>
                <h4 className='font-medium'>{product.name}</h4>
                <p className='mt-1'>${product.price}</p>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  </section>
}

export default NewArraivals