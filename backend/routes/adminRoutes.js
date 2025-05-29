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