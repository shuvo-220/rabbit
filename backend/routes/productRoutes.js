const express = require('express');
const Product = require('../models/Products');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

//product create
router.post('/', protect, admin, async (req, res) => {
    try {
        const { name, description, price, discountPrice, countInStock, category, brand,
            sizes, colors, collections, material, gender, images, isFeatured, isPublished,
            tags, dimesions, weight, sku
        } = req.body;

        const product = new Product({
            name, description, price, discountPrice, countInStock, category, brand,
            sizes, colors, collections, material, gender, images, isFeatured, isPublished,
            tags, dimesions, weight, sku, user: req.user._id
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.put('/:id', protect, admin, async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            res.status(500).json({ message: 'product not found' });
        }
        res.status(200).json(product)
    } catch (error) {

    }
})

//delete product
router.delete('/:id', protect, admin, async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        if (!deleteProduct) {
            res.status(500).json({ message: 'Product not found' })
        } else {
            res.status(200).json('Product deleted success.')
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
});

//best seller
router.get('/best-seller', async(req, res)=>{
    try {
        const bestSeller = await Product.findOne().sort({rating:-1})
        if(bestSeller){
            res.status(200).json(bestSeller);
        }else{
            res.status(400).json({message:'Best seller not found'});
        }
    } catch (error) {
        console.log(error.message);
    }
});

//new arrival
router.get('/new-arrivals', async(req, res)=>{
    try {
        const newArrival = await Product.find().sort({createdAt:-1}).limit(8);
        res.status(200).json(newArrival);
    } catch (error) {
        console.log(error.message)
    }
})


//get single product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(500).json({ message: 'product not found' });
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error.message);
    }
})


//get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        if (!products) {
            res.status(500).json({ message: 'Products not found' });
        }
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message)
    }
})

//get similer product
router.get('/similer/:id', async(req, res)=>{
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        if(!product){
            res.status(500).json({message:'products not found'});
        }
        const similerProducts = await Product.find({
            _id:{$ne:id},
            gender:product.gender,
            category:product.category
        }).limit(4)
        res.status(200).json(similerProducts);
    } catch (error) {
        console.log(error.message);
    }
})



module.exports = router;
