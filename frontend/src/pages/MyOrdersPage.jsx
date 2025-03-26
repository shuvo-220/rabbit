import React, { useEffect, useState } from 'react'

const MyOrdersPage = () => {

  const[orders, setOrders] = useState([]);

  useEffect(()=>{
    setTimeout(()=>{
      const mocOrders = [
        {
          _id:'12345',
          createdAt:new Date(),
          shippingAddress:{city:'Dhaka',country:'Bangladesh'},
          orderItems:[
            {
              name:'product 1',
              image:'https://picsum.photos/500/500?random=1'
            }
          ],
          totalPrice:100,
          isPaid:true
        },
        {
          _id:'123456',
          createdAt:new Date(),
          shippingAddress:{city:'Dhaka',country:'Bangladesh'},
          orderItems:[
            {
              name:'product 2',
              image:'https://picsum.photos/500/500?random=2'
            }
          ],
          totalPrice:100,
          isPaid:true
        }
      ]
      
    })
  },[])

  return (
    <div>MyOrdersPage</div>
  )
}

export default MyOrdersPage