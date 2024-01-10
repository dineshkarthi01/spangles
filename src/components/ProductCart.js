import React, { useState } from 'react';
import './ProductCart.css'

const ProductCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', image: 'p1.jpg', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', image: 'p2.jpg', price: 30, quantity: 1 },
    // Add more items as needed
  ]);

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <span>{item.name}</span>
          <span>${item.price}</span>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, e.target.value)}
          />
          <span>${item.price * item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>Delete</button>
        </div>
      ))}
      
      <div>
        <button>Continue Shopping</button>
        <button>Update Cart</button>
      </div>

      <div>
        <button>Apply Coupon</button>
        <span>Cart Total: ${calculateTotal()}</span>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default ProductCart;
