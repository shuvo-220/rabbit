const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Products');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

const getCart = async (userId, guestId) => {
    if (userId) {
        return await Cart.findOne({ user: userId })
    } else if (guestId) {
        return await Cart.findOne({ guest: guestId })
    }
    return null;
}

router.post('/', async (req, res) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        }
        let cart = await getCart(userId, guestId)
        if (cart) {
            const productIndex = cart.products.findIndex((p) =>
                p.productId.toString() === productId &&
                p.size === size &&
                p.color === color
            )
            if (productIndex > -1) {
                cart.products[productIndex].quantity += quantity
            } else {
                cart.products.push({
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    size,
                    color,
                    quantity,

                })
            }
            cart.totalPrice = cart.products.reduce((acc, item) =>
                acc + item.price * item.quantity, 0)
            await cart.save();
            return res.status(200).json(cart)
        } else {
            const newCart = await Cart.create({
                userId: userId ? userId : undefined,
                 guestId: guestId ? guestId : 'guest_' + new Date().getTime(),
                products: [
                    {
                        productId,
                        name: product.name,
                        image: product.images[0].url,
                        price: product.price,
                        size,
                        color,
                        quantity
                    }
                ],
                totalPrice: product.price * quantity,
            })
            return res.status(201).json(newCart);
        }
    } catch (error) {
        console.log(error.message)
    }
})

router.put('/', async (req, res) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;
    try {
        let cart = await getCart(userId, guestId);
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
        }
        const productIndex = cart.products.findIndex(
            (p) => p.productId.toString() === productId &&
                p.size === size &&
                p.color === color
        )
        if (productIndex > -1) {
            if (quantity > 0) {
                cart.products[productIndex].quantity = quantity;
            } else {
                cart.products.splice(productIndex, 1)
            }
            cart.totalPrice = cart.products.reduce((acc, item) => acc + item.price * item.quantity, 0)
            await cart.save();
            return res.status(200).json(cart)
        }else{
            res.status(404).json({message:'product not found'});
        }
    } catch (error) {
        console.log(error.message);
    }
})

router.delete('/', async(req, res)=>{
    const{productId, size,color,guestId, userId} = req.body;
    try {
        let cart = await getCart(userId, guestId);
        if(!cart) return res.status(404).json({message:'cart not found'});
        const productIndex = cart.products.findIndex((p)=>
             p.productId.toString() === productId && 
             p.size === size && 
             p.color === color
            )
        if(productIndex>-1){
            cart.products.splice(productIndex, 1)
            cart.totalPrice = cart.products.reduce((acc, item)=>acc+item.price * item.quantity, 0)
            await cart.save();
            return res.status(200).json(cart)
        }else{
            return res.status(404).json({message:'product not found on cart'});
        }
    } catch (error) {
        console.log(error.message);
    }
})

router.get('/', async(req, res)=>{
    const{userId, guestId} = req.query;
    try {
        const cart = getCart(userId, guestId);
        if(cart){
            res.status(200).json(cart)
        }else{
            res.status(404).json({message:'cart not found'});
        }
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router;
