const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let cart = [];

// Endpoint to add item to the cart
app.post('/add-to-cart', (req, res) => {
    const item = req.body;
    cart.push(item);
    res.status(200).json({ message: 'Item added to cart', cart });
});

// Endpoint to get the cart items
app.get('/cart', (req, res) => {
    res.status(200).json(cart);
});

// Endpoint to proceed to payment (mock)
app.post('/checkout', (req, res) => {
    // Here you would handle payment processing logic
    cart = []; // Clear the cart after checkout
    res.status(200).json({ message: 'Checkout successful' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});