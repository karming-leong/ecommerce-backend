const express = require('express');
const cors = require('cors');
require('dotenv').config();
const productsRouter = require('./routes/products');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');

const pool = require('./database');


const app = express();



// Middleware
app.use(express.json());
app.use(cors());


//routes
app.use('/api/products', productsRouter);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

// Routes(basic)
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the ecommerce API" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});