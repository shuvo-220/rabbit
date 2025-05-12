const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Products');
const User = require('./models/User');
const products = require('./data/products');
const Cart = require('./models/Cart');

dotenv.config();

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)

const seedData = async()=>{
    try {
        await Product.deleteMany()
        await User.deleteMany()
        await Cart.deleteMany()

        //create default admin
        const createdUser = await User.create({
            name:'Admin USer',
            email:'admin@gmail.com',
            password:'123',
            role:'admin'
        })

        const userID = createdUser._id
        const sampleProduct = products.map((product)=>{
            return{...product, user:userID}
        })

        await Product.insertMany(sampleProduct);

        console.log('product data seed successfully');
        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

seedData();