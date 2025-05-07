const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

//register user
router.post('/register', async(req, res)=>{
    const{name, email, password} = req.body;
    try {
        let user = await User.findOne({email})
        if(user){
            return res.status(400).send({message:'User already exist'})
        }
        user = new User({name,email,password});
        await user.save();
        const payload = {user:{id:user._id,role:user.role }}
        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'40h'},(err, token)=>{
            if(err) throw err
            res.status(201).json({
                user:{
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    role:user.role
                },
                token
            })
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
});

module.exports = router;