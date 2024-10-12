import React, { useEffect, useState } from "react";
import axios from "axios";
import CartList from "./CartList";
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const email = localStorage.getItem("email");

  const updateTotalAmount = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + (item.newPrice * item.quantity);
    }, 0);
    setTotalAmount(total);
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/${email}`)
      .then((response) => {
        console.log(response.data);
        setCartItems(response.data);
      })
      .catch(err => console.log(err));
  }, [email]);

  useEffect(() => {
    updateTotalAmount(); // Recalculate total whenever cartItems changes
  }, [cartItems]);

  return (
    <section className="payment-section">
      <div className="payment-container">
        <>
          <h5 className="cart-title">Your Shopping Cart - {cartItems.length} items</h5>
          {
            cartItems.map((v, i) => (
              <div key={i}>
                <CartList data={v} updateTotalAmount={updateTotalAmount} removeItem={removeItem} setTotalAmount={setTotalAmount} totalAmount={totalAmount}/>
              </div>
            ))
          }
          <hr className="divider" />
          <div className="shipping-info">
            <strong>Expected shipping delivery:</strong>
            <p>12.10.2024 - 14.10.2024</p>
          </div>
          <div className="payment-methods">
            <strong>We accept:</strong>
            <p>[Payment methods here]</p>
          </div>
          <div className="summary">
            <h5>Order Summary</h5>
            <div className="summary-item">
              <span>Products</span>
              <span>Rs. {totalAmount.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping</span>
              <span>Blue Dart</span>
            </div>
            <div className="summary-item total">
              <strong>Total amount (including GST)</strong>
              <strong>Rs. {totalAmount.toFixed(2)}</strong>
            </div>
            <button className="checkout-button">Go to Checkout</button>
          </div>
        </>
      </div>
    </section>
  );
};

export default Cart;
