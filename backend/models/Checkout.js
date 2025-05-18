const mongoose = require('mongoose');

const checkoutItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        
    }
})