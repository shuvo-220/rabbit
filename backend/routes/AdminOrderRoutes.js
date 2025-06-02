const express = require('express');
const Order = require('../models/Order');
const{protect, admin} = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, admin, async(req, res)=>{
    try {
        const orders = await Order.find({}).populate("user", "name email")
        res.json(orders)
    } catch (error) {
        console.log(error.message);
    }
})

router.put('/:id', protect, admin, async(req, res)=>{
    try {
        const order = await Order.findById(req.params.id);
        if(order){
            order.status = req.body.status || order.status
            order.isDelivered = req.body.isDelivered === 'Delivered' ? true : order.isDelivered
            order.deliverdAt = req.body.isDelivered === 'Delivered' ? Date.now() : order.deliverdAt
            const updatedOrder = await order.save();
            res.json(updatedOrder);
        }else{
            res.status(404).json({message:'order not found'});
        }
    } catch (error) {
        console.log(error.message)
    }
})

router.delete('/:id', protect, admin, async(req, res)=>{
    try {
        const order = await Order.findById(req.params.id);
        if(order){
            await order.deleteOne();
            res.status(200).json({message:'order deleted successfully'});
        }else{
            res.status(404).json({message:'order not found'});
        }
    } catch (error) {
        console.log(error.message)
    }
})


module.exports = router;