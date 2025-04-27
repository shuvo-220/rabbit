import React from 'react'


const OrderConfirmationPage = () => {

  
const checkout = {
  _id : '12345',
  createdAt:new Date(),
  checkoutItems:[
    {
      productId:'1',
      name:'jacket',
      color:'black',
      size:'M',
      price:150,
      quantity:1,
      image:'https://picsum.photos/150?random=1'
    },
    {
      productId:'2',
      name:'stylesh pant',
      color:'red',
      size:'L',
      price:125,
      quantity:2,
      image:'https://picsum.photos/150?random=2'
    },
  ],
  shippingAddress:{
    address:'Char Chartala',
    city:'Ashuganj',
    country:'Bangladesh'
  }
}

const calculateEstimatedDelivery=(createdAt)=>{
  const orderDate = new Date(createdAt);
  orderDate.setDate(orderDate.getDate()+10)
  return orderDate.toLocaleDateString()
}

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className='text-bold text-4xl text-center text-emerald-700 mb-8'>
        Thank you for your order
      </h1>
      {checkout && (
        <div className='p-6 rounded-lg border'>
          <div className='flex justify-between mb-20'>
            {/* order id and date */}
            <div>
              <h2 className='text-xl font-bold'>
                {checkout._id}
              </h2>
              <p className='text-gray-500'>Order Date : {checkout.createdAt.toLocaleDateString()}</p>
            </div>
            {/* estimated delivery */}
            <div>
              <p className='text-emerald-700 text-sm '>
                Estemited Delivery:{calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* ordered items */}
          <div className='mb-20 '>
            {checkout.checkoutItems.map((item)=>(
              <div key={item.productId} className='flex items-center mb-4'>
                <img src={item.image} alt={item.name} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderConfirmationPage