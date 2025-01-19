import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartList from "./CartList";
import './Cart.css';
import { Context } from "../../../App.js";

const Cart = () => {
  const [cartCount, setCartCount] = useContext(Context);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const email = localStorage.getItem("email");

  // Function to update the total amount whenever cart items change
  const updateTotalAmount = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + (item.newPrice * item.quantity);
    }, 0);
    setTotalAmount(total);
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== id);
      // Update the backend with the modified cart
      axios.put(`https://json-server-sik9.onrender.com/userDB/${email}`, {
        ...prevItems,
        cart: updatedItems
      })
        .then(() => {
          console.log("Item removed from cart.");
          updateTotalAmount(); // Recalculate total after removal
        })
        .catch(err => console.log(err));
      return updatedItems;
    });
  };

  useEffect(() => {
    // Fetch the user's cart from the backend
    axios.get(`https://json-server-sik9.onrender.com/userDB`)
      .then((response) => {
        const user = response.data.find(user => user.email === email);
        if (user) {
          setCartItems(user.cart); // Set the cart items in the state
          setCartCount(user.cart.length); // Update the cart count
        }
      })
      .catch(err => console.log(err));
  }, [email]);

  useEffect(() => {
    updateTotalAmount(); // Recalculate total whenever cartItems change
  }, [cartItems]);

  return (
    <section className="payment-section">
      <div className="payment-container">
        <>
          <h5 className="cart-title">Your Shopping Cart - {cartItems.length} items</h5>
          {setCartCount(cartItems.length)} {/* This will update the cart count */}
          {
            cartItems.map((item, index) => (
              <div key={index}>
                <CartList
                  data={item}
                  updateTotalAmount={updateTotalAmount}
                  removeItem={removeItem}
                  setTotalAmount={setTotalAmount}
                  totalAmount={totalAmount}
                />
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
