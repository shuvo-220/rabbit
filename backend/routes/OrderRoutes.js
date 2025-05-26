const express = require('express');
const Order = require('../models/Order');
const{protect} = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/my-orders', protect, async(req, res)=>{
    try {
        const orders = await Order.find({user:req.user._id}).sort({createdAt:-1});
        res.status(200).json(orders);
    } catch (error) {
        console.log(error.message)
    }
})

router.get('/:id', protect, async(req, res)=>{
    try {
        const order = await Order.findById(req.params.id).populate("user", "name email");
        if(!order){
            res.status(404).json({message:'order not found'});
        }
        res.status(200).json(order);
    } catch (error) {
        console.log(error.message)
    }
})


module.exports = router;