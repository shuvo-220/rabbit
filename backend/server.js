const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const checkoutRoutes = require('./routes/CheckoutRoutes');
const orderRoute = require('./routes/OrderRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const subscribeRoutes = require('./routes/SubscribeRoute');
const adminRoutes = require('./routes/adminRoutes');
const productAdminRoutes = require('./routes/productAdminRoutes');
const orderAdminRoutes = require('./routes/AdminOrderRoutes');

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
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/orders', orderRoute);
app.use('/api/upload', uploadRoutes);
app.use('/api', subscribeRoutes);

//admin
app.use('/api/admin/users', adminRoutes);
app.use('/api/admin/products', productAdminRoutes);
app.use('/api/admin/orders', orderAdminRoutes);

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})