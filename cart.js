let cart = []; // Function to add item to the cart
function addToCart(item) {
    fetch('http://localhost:3000/add-to-cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
    .then(response => response.json())
    .then(data => {
        cart = data.cart; // Update the cart from the server response
        updateCartDisplay();
        alert(data.message);
    })
    .catch(error => console.error('Error:', error));
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalCostDisplay = document.getElementById('total-cost');
    
    cartItems.innerHTML = '';
    
    let totalCost = 0; // Initialize total cost
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);
        
        // Calculate total cost
        totalCost += item.price * item.quantity; 
    });
    
    totalCostDisplay.textContent = totalCost.toFixed(2); // Update total cost display
}

// Function to proceed to payment
function checkout() {
    fetch('http://localhost:3000/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart), // Send the current cart to the server
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        cart = []; // Clear the cart after checkout
        updateCartDisplay(); // Update the display
    })
    .catch(error => console.error('Error:', error));
}

// Function to change quantity of items
function changeQuantity(id, change) {
    const quantityInput = document.getElementById(`quantity-${id}`);
    
    let currentQuantity = parseInt(quantityInput.value);
    
    // Update quantity and ensure it doesn't go below zero
    if (currentQuantity + change >= 0) {
        currentQuantity += change;
        quantityInput.value = currentQuantity;
        
        // Optionally update the item in the cart if it's already added
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            cart[itemIndex].quantity = currentQuantity; // Update quantity in the cart
            updateCartDisplay(); // Refresh the display
        }
        
        // If quantity is zero, remove from cart (optional)
        if (currentQuantity === 0 && itemIndex > -1) {
            cart.splice(itemIndex, 1); // Remove item from the cart if quantity is zero
            updateCartDisplay(); // Refresh the display
        }
        
     }
}