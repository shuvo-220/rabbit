const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {protect} = require('../middleware/authMiddleware');

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

//login
router.post('/login', protect, async(req, res)=>{
    const{email, password} = req.body;
    try {
        let user = await User.findOne({email})
        if(!user){
            res.status(400).json({message:'User not registered'});
        }
        const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({message:'invalid credentials'});

        const payload = {user:{id:user._id, role:user.role}}

        jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:'40h'}, (err, token)=>{
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
        res.status(500).json(error.message);
    }
})

router.get('/profile', protect, async(req, res)=>{
    res.status(201).json(req.user);
})



module.exports = router;