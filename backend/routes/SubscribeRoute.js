const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');


router.post('/subscribe', async(req, res)=>{
    const {email} = req.body;
    if(!email){
        return res.status(400).json({message:'email is required'});
    }
    try {
        let subscriber = await Subscriber.findOne({email});
        if(subscriber){
            return res.status(400).json({message:'this email already subscribed'});
        }
        subscriber = new Subscriber({email})
        await subscriber.save();
        res.status(200).json({message:'successfully subscribe to newsletter'});
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;
