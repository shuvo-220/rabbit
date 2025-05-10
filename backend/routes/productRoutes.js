const express = require('express');
const Product = require('../models/Products');
const {protect, admin} = require('../middleware/authMiddleware');

const router = express.Router();

//product create
router.post('/', protect, admin, async(req, res)=>{
    try {
        const{name,description,price,discountPrice,countInStock,category,brand,
            sizes,colors,collections,material,gender,images,isFeatured,isPublished,
            tags,dimesions,weight,sku
        } = req.body;

        const product = new Product({
            name,description,price,discountPrice,countInStock,category,brand,
            sizes,colors,collections,material,gender,images,isFeatured,isPublished,
            tags,dimesions,weight,sku,user:req.user._id
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.put('/:id', protect, admin, async(req, res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body, {new:true});
        if(!product){
            res.status(500).json({message:'product not found'});
        }
        res.status(200).json(product)
    } catch (error) {
        
    }
})

router.delete('/:id', protect, admin, async(req, res)=>{
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        if(!deleteProduct){
            res.status(500).json({message:'Product not found'})
        }else{
            res.status(200).json('Product deleted success.')
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
});


router.get('/:id', async(req, res)=>{
    try {
      const product = await Product.findById(req.params.id);
      if(!product){
        res.status(500).json({message:'product not found'});
      }
      res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error.message);
    }
})


module.exports = router;
