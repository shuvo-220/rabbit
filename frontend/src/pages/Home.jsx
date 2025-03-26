import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollectionSection from '../components/products/GenderCollectionSection'
import NewArraivals from '../components/products/NewArraivals'
import ProductDetails from '../components/products/ProductDetails'
import ProductGrid from '../components/products/ProductGrid'
import FeaturedCollection from '../components/products/FeaturedCollection'
import FeaturesSection from '../components/products/FeaturesSection'

const Home = () => {

  const placeholderProducts = [
    {
      _id:1,
      name:'product 1',
      price:100,
      images:[{url:'https://picsum.photos/500/500?random=1'}]
  },
  {
      _id:2,
      name:'product 2',
      price:100,
      images:[{url:'https://picsum.photos/500/500?random=2'}]
  },
  {
      _id:3,
      name:'product 3',
      price:100,
      images:[{url:'https://picsum.photos/500/500?random=3'}]
  },
  {
      _id:4,
      name:'product 4',
      price:100,
      images:[{url:'https://picsum.photos/500/500?random=4'}]
  },
  {
    _id:5,
    name:'product 1',
    price:100,
    images:[{url:'https://picsum.photos/500/500?random=5'}]
},
{
    _id:6,
    name:'product 2',
    price:100,
    images:[{url:'https://picsum.photos/500/500?random=6'}]
},
{
    _id:7,
    name:'product 3',
    price:100,
    images:[{url:'https://picsum.photos/500/500?random=7'}]
},
{
    _id:8,
    name:'product 4',
    price:100,
    images:[{url:'https://picsum.photos/500/500?random=8'}]
}
  ]

  return (
    <div>
        <Hero />
        <GenderCollectionSection />
        <NewArraivals />
        {/* best seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        <ProductDetails />
        <div className='container mx-auto'>
          <h2 className='text-3xl text-center font-bold mb-4'>
            Top Wears For Women
          </h2>
          <ProductGrid product={placeholderProducts} />
        </div>
        <FeaturedCollection />
        <FeaturesSection />
    </div>
  )
}

export default Home