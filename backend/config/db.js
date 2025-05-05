const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database successful');
    }catch(error){
        console.log('database failed')
    }
}

module.exports = connectDB;