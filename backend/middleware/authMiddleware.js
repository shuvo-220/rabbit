const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async(req, res, next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.user.id).select('-password');
            next();
        } catch (error) {
            console.log('Token varification failed : ',error.message);
            res.status(400).json({message:'no authorized'})
        }
    }else{
        res.status(400).json({message:'token not available'});
    }
}

const admin = (req, res, next)=>{
    if(req.user && req.user.role === 'admin'){
        next()
    }else{
        res.status(400).json({message:'No authorized as an admin'});
    }
}


module.exports = { protect, admin }