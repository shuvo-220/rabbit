import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {

  const[searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const[filters, setFilters] = useState({
    categories : '',
    gender:'',
    color:'',
    size:[],
    meterial:[],
    brand:[],
    minPrice:0,
    maxPrice:100
  })

  const[priceRange, setPriceRange] = useState([0, 100]);

  const categories = ['top wear','bottom wear'];

  const color = [
    'red',
    'blue',
    'black',
    'green',
    'yellow',
    'grey',
    'white',
    'pink',
    'beige',
    'navy'
  ]

  const sizes = ['XS','S','M','L','XL','XXL'];

  const meterial = [
    'cotton',
    'wool',
    'denim',
    'polyester',
    'silk',
    'linen',
    'viscoes',
    'fleece'
  ]

  const brands = [
    'urban threads',
    'modern fit',
    'street style',
    'beach breez',
    'chicstyle'
  ]

  const gender = ['men', 'women']

  useEffect(()=>{
    const params = Object.fromEntries([...searchParams])
    setFilters({
      categories : params.categories || '',
      gender : params.gender || '',
      color : params.color || '',
      size : params.size? params.size.split(',') : [],
      meterial : params.meterial ? params.meterial.split(',') : [],
      brand : params.brand ? params.brand.split(',') : [],
      minPrice : params.minPrice || 0,
      maxPrice : params.maxPrice || 100
    })
    setPriceRange([0, params.maxPrice || 100])
  },[searchParams]);

  const handleFilterChange=(e)=>{
    const{name, type, checked, value} = e.target;
    let newFilters = {...filters}
    if(type === 'checkbox'){
      if(checked){
        newFilters[name] = [...(newFilters[name] || []), value ]
      }else{
        newFilters[name] = newFilters[name].filter((item)=>item !== value)
      }
    }else{
      newFilters[name] = value
    }
    setFilters(newFilters)
    updateUrlParams(newFilters)
  }

  const updateUrlParams=(newFilters)=>{
    const params = new URLSearchParams()
    Object.keys(newFilters).forEach((key)=>{
      if(Array.isArray(newFilters[key]) && newFilters[key].length > 0){
        params.append(key, newFilters[key].join(','))
      }else if(newFilters[key]){
        params.append(key, newFilters[key])
      }
    })
    setSearchParams(params)
    navigate(`?${params.toString()}`)
  }

  const handlePriceChange=(e)=>{
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = {...filters, minPrice:0, maxPrice:newPrice}
    setFilters(filters)
    updateUrlParams(newFilters)
  }

  return (
    <div className='p-4'>
      <h3 className='text-xl font-medium text-gray-800 mb-4'>Filter</h3>
      {/* category filter */}
      <div className='mb-6'>
        <label className='block text-gray-600 font-medium mb-2'>Category</label>
        {categories.map((category)=>(
          <div key={category} className='flex items-center mb-1 '>
            <input type='radio' name='catrgory'
            value={category}
            onChange={handleFilterChange}
            checked={filters.category===category }
            className='mr-2 h-4 w-4 text-blue-50 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{category}</span>
          </div>
        ))}
      </div>

       {/* gender filter */}
       <div className='mb-6'>
        <label className='block text-gray-600 font-medium mb-2'>Gender</label>
        {gender.map((gender)=>(
          <div key={gender} className='flex items-center mb-1 '>
            <input type='radio'
            value={gender}
            onChange={handleFilterChange}
            checked={filters.gender === gender}
            name='gender' className='mr-2 h-4 w-4 text-blue-50 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{gender}</span>
          </div>
        ))}
      </div>

      {/* color filter */}
      <div className='mb-6'>
        <lable className='block text-gray-600 font-medium mb-2'>Color</lable>
        <div className='flex flex-wrap gap-2'>
          {color.map((color)=>(
            <button key={color} name='color' 
            value={color}
            onClick={handleFilterChange}
            checked={filters.color === color}
            className={`w-6 h-6 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filters.color === color ? 'ring-2 ring-blue-500':''}`}
            style={{backgroundColor:color.toLowerCase()}}
            ></button>
          ))}
        </div>
      </div>


      {/* size filter */}
      <div className='mb-6'>
        <lable className='block text-gray-600 font-medium mb-2'>Size</lable>
        {sizes.map((size)=>(
          <div key={size} className='flex items-center mb-1'>
            <input type='checkbox' name='size' 
            value={size}
            onChange={handleFilterChange}
            checked={filters.size.includes(size)}
            className='mr-2 h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{size}</span>
          </div>
        ))}
      </div>

      
      {/* meterial filter */}
      <div className='mb-6'>
        <lable className='block text-gray-600 font-medium mb-2'>Meterial</lable>
        {meterial.map((meterial)=>(
          <div key={meterial} className='flex items-center mb-1'>
            <input type='checkbox' name='size' 
            value={meterial}
            onChange={handleFilterChange}
            checked={filters.meterial.includes(meterial)}
            className='mr-2 h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{meterial}</span>
          </div>
        ))}
      </div>

      
      {/* brand filter */}
      <div className='mb-6'>
        <lable className='block text-gray-600 font-medium mb-2'>Brand</lable>
        {brands.map((brand)=>(
          <div key={brand} className='flex items-center mb-1'>
            <input type='checkbox' name='size'
            value={brand}
            onChange={handleFilterChange}
            checked={filters.brand.includes(brand)}
            className='mr-2 h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{brand}</span>
          </div>
        ))}
      </div>


        {/* price range filter */}
        <div className='mb-8'>
          <label className='block text-gray-600 font-medium mb-2'>Price Range</label>
          <input type='range' name='priceRange' min={0} max={100} 
          value={priceRange[1]}
          onChange={handlePriceChange}
          className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
          />
          <div className='flex justify-between text-gray-600 mt-2'>
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

    </div>
  )
}

export default FilterSidebar