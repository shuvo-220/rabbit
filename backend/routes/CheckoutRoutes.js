const express = require('express');
const Checkout = require('../models/Checkout');
const Cart = require('../models/Cart');
const Product = require('../models/Products');
const Order = require('../models/Order');
const{protect} = require('../middleware/authMiddleware');
const router = express.Router();


router.post('/', protect, async(req, res)=>{
    const{checkoutItems, shippingAddress, paymentMethod, totalPrice} = req.body;
    if(!checkoutItems || checkoutItems.length===0){
        res.status(404).json({message:'no items in checkout'});
    }
    try {
        const newCheckout = await Checkout.create({
            user:req.user._id,
            checkoutItems:checkoutItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
            paymentStatus:'pending',
            isPaid:false
        })
        res.status(200).json(newCheckout);
    } catch (error) {
        console.log(error.message);
    }
});


router.put('/:id/pay', protect, async(req, res)=>{
    const{paymentStatus, paymentDetails} = req.body;
    try {
        const checkout = await Checkout.findById(req.params.id)
        if(!checkout){
            res.status(404).json({message:'checkout not found'});
        }
        if(paymentStatus === 'paid'){
            checkout.isPaid = true
            checkout.paymentStatus = paymentStatus
            checkout.paymentDetails = paymentDetails
            checkout.paidAt = Date.now()
            await checkout.save();
            res.status(200).json(checkout);
        }else{
            res.status(404).json('invalid payment status')
        }
    } catch (error) {
        console.log(error.message);
    }
})

// router.post('/:id/finalize', protect, async(req, res)=>{
//     try {
//         const checkout = await Checkout.findById(req.params.id);
//         if(!checkout){
//             res.status(404).json({message:'checkout not found'});
//         }
//         if(checkout.isPaid && !checkout.isFinalized){
//             const finalOrder = await Order.create({
//                 user:checkout.user,
//                 orderItems:checkout.orderItems,
//                 shippingAddress:checkout.shippingAddress,
//                 paymentMethod:checkout.paymentMethod,
//                 totalPrice:checkout.totalPrice,
//                 isPaid:true,
//                 paidAt:checkout.paidAt,
//                 isDelivered:false,
//                 paymentStatus:'paid',
//                 paymentDetails:checkout.paymentDetails
//             })
//             checkout.isFinalized = true
//             checkout.finalizedAt = Date.now()
//             await checkout.save();
//             await Cart.findByIdAndDelete({user:checkout.user});
//             res.status(201).json(finalOrder);
//         }else if(checkout.isFinalized){
//             res.status(400).json({message:'checkout already finalized'})
//         }else{
//             res.status(400).json({message:'checkout is not paid'})
//         }
//     } catch (error) {
//         console.log(error.message)
//     }
// })


router.post('/:id/finalize', protect, async(req, res)=>{
    try {
        const checkout = await Checkout.findById(req.params.id);
        if(!checkout){
            return res.status(404).json({message:'checkout not found'});
        }

        if(checkout.isPaid && !checkout.isFinalized){
            const finalOrder = await Order.create({
                user: checkout.user,
                orderItems: checkout.checkoutItems,  // Changed from checkout.orderItems to checkout.checkoutItems
                shippingAddress: checkout.shippingAddress,
                paymentMethod: checkout.paymentMethod,
                totalPrice: checkout.totalPrice,
                isPaid: true,
                paidAt: checkout.paidAt,
                isDelivered: false,
                paymentStatus: 'paid',
                paymentDetails: checkout.paymentDetails
            });

            checkout.isFinalized = true;
            checkout.finalizedAt = Date.now();
            await checkout.save();

            // Corrected cart deletion - find cart by user ID and delete
            await Cart.deleteOne({ user: checkout.user });

            return res.status(201).json(finalOrder);
        } else if(checkout.isFinalized){
            return res.status(400).json({message:'checkout already finalized'});
        } else {
            return res.status(400).json({message:'checkout is not paid'});
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: 'Server error finalizing order'});
    }
});

module.exports = router;