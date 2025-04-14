import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {

  const[searchParams, setSearchParams] = useSearchParams();
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
    const params = Object.fromEntries({...searchParams})
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
  },[searchParams])

  return (
    <div>FilterSidebar</div>
  )
}

export default FilterSidebar