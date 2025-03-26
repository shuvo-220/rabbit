import React, { useEffect, useState } from 'react';
import {toast} from 'sonner';
import ProductGrid from './ProductGrid';

const selectedProducts = {
    name:'Stylish Jacket',
    price:120,
    orginalPrice:150,
    description:'this is a stylesh jacket perfect for all occasion.',
    brand:'FashionBrand',
    meterial:'Lather',
    sizes:['S','M','L','XL'],
    colors:['Red', 'Black'],
    images:[
        {
            url:"https://picsum.photos/500/500?random=1",
            altText:'Styleish Jacket'
        },
        {
            url:"https://picsum.photos/500/500?random=2",
            altText:'Styleish Jacket'
        }
    ]
}

const semilarProudtc=[
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
    }
]

const ProductDetails = () => {

    const[mainImg, setMainImg] = useState('');
    const[selectSize, setSelectSize] = useState('');
    const[selectColor, setSelectColor] = useState('');
    const[quantity, setQuantity] = useState(1);
    const[isButtonDisables, setIsButtonDisabled] = useState(false);

    useEffect(()=>{
        if(selectedProducts?.images?.length > 0){
            setMainImg(selectedProducts.images[0].url)
        }
    },[selectedProducts]);

    const handleQuantityChange=(action)=>{
        if (action === 'plus') setQuantity((prev) => prev + 1);
        if (action === 'minus' && quantity > 1) setQuantity((prev) => prev - 1);
    }


    const handleAddToCart=()=>{
        if(!selectSize || !selectColor){
            toast.error('please selsct color and size',{
                duration : 1000,
            });
            return;
        }
        setIsButtonDisabled(true)

        setTimeout(()=>{
            toast.success('product added to cart',{
                duration:1000
            })
            setIsButtonDisabled(false)
        },500)
    }

  return (
    <div className='p-6'>
        <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
            <div className='flex flex-col md:flex-row'>
                {/* left thambline */}
                <div className='hidden md:flex flex-col space-y-4 mr-6'>
                    {
                        selectedProducts.images.map((image, index)=>(
                            <img src={image.url} altText={image.altText} key={index}
                            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImg === image.url? 'border-black':'border-gray-300'}`}
                            onClick={()=>setMainImg(image.url)}
                            />
                        ))
                    }
                </div>
                {/* main image */}
                <div className='md:w-1/2'>
                    <div className='mb-4'>
                        <img src={mainImg} alt='main image' 
                        className='w-full h-auto object-cover rounded-lg'
                        
                        />
                    </div>
                </div>
                {/* mobile thambline */}
                <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
                {
                        selectedProducts.images.map((image, index)=>(
                            <img src={image.url} altText={image.altText} key={index}
                            className='w-20 h-20 object-cover rounded-lg cursor-pointer border'
                            />
                        ))
                    }
                </div>
                {/* right side */}
                <div className='md:1-1/2 md:ml-10'>
                    <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                        {selectedProducts.name}
                    </h1>
                    <p className='text-lg text-gray-600 mb-1 line-through'>{selectedProducts.orginalPrice}</p>
                    <p className='text-xl text-gray-500 mb-2'>${selectedProducts.price}</p>
                    <p className='text-gray-600 mb-4 '>{selectedProducts.description}</p>
                    <div className='mb-4'>
                        <p className='text-gray-700'>Color:</p>
                        <div className='flex gap-2 mt-2'>
                            {
                                selectedProducts.colors.map((color)=>(
                                    <button key={color} 
                                    className={`w-8 h-8 rounded-full border ${selectColor === color ? 'border-4 border-black':'border-gray-300'}`}
                                    style={{backgroundColor:color.toLocaleLowerCase(),
                                        filter:"brightness(0.5)"
                                    }}
                                    onClick={()=>setSelectColor(color)}
                                    ></button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='mb-4'>
                        <p className='text-gray-700'>Size:</p>
                        <div className='flex mt-2 gap-2'>
                            {
                                selectedProducts.sizes.map((size)=>(
                                    <button key={size}
                                     className={`px-4 py-2 rounded border ${selectSize === size ? 'bg-black text-white':''}`}
                                     onClick={()=>setSelectSize(size)}
                                     >
                                        {size}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='mb-6'>
                        <p className='text-gray-700'>Quantity:</p>
                        <div className='flex items-center space-x-4 mt-2'>
                            <button onClick={() => handleQuantityChange('minus')} className='px-2 py-1 bg-gray-200 rounded text-lg'>-</button>
                            <span className='text-lg'>{quantity}</span>
                            <button onClick={()=>handleQuantityChange('plus')} className='px-2 py-1 bg-gray-200 rounded text-lg'>+</button>
                        </div>
                    </div>
                    <button onClick={handleAddToCart} 
                    disabled={isButtonDisables}
                    className={`bg-black text-white px-6 py-2 rounded w-full mb-4 ${isButtonDisables?'cursor-not-allowed opacity-50':'bg-gray-900'}`}>
                        {isButtonDisables?'Adding...':'ADD TO CART'}
                    </button>
                    <div className='mt-10 text-gray-700'>
                        <h3 className='text-xl font-bold mb-4'>
                            Charactertastic:
                        </h3>
                        <table className='w-full text-left text-sm text-gray-600'>
                            <tbody>
                                <tr>
                                    <td className='py-1'>Brand</td>
                                    <td className='py-1'>{selectedProducts.brand}</td>
                                </tr>
                                <tr>
                                    <td className='py-1'>Meterial</td>
                                    <td className='py-1'>{selectedProducts.meterial}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <h2 className='text-2xl text-center font-medium mb-4'>
                    You May Also Like
                </h2>
                <ProductGrid product={semilarProudtc} />
            </div>
        </div>
    </div>
  )
}

export default ProductDetails