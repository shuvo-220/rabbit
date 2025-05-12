const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//mongodb
connectDB();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('backend')
})

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes)

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})