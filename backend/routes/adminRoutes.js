const express = require('express');
const User = require('../models/User');
const{protect, admin} = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/', protect, admin, async(req, res)=>{
    try {
        const users = await User.find({})
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;


router.post('/', protect, admin, async(req, res)=>{
    const{name,email,password,role} = req.body;
    try {
        let user = await User.findOne({email});
        if(user){
            res.status(400).json({message:'user already exist'});
        }
        user = new User({
            name,email,password,role:role || 'customer'
        })
        await user.save();
        res.status(200).json({message:'User created successfully', user});
    } catch (error) {
        console.log(error.message);
    }
});


router.put('/:id', protect, admin, async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
})




