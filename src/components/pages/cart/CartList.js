import axios from "axios";
import { useState, useEffect } from "react";
import "./CartList.css";

export default function CartList({ data, updateTotalAmount, removeItem, setTotalAmount, totalAmount }) {
    const [quantity, setQuantity] = useState(data.quantity);
    const [curTotal, setCurTotal] = useState(data.quantity * data.newPrice);
    const email = localStorage.getItem("email"); // Assuming email is unique per user

    useEffect(() => {
        setCurTotal(quantity * data.newPrice); // Recalculate current total when quantity changes
    }, [quantity, data.newPrice]);

    // Helper function to update user cart
    const updateCart = (newQuantity) => {
        axios
            .get(`https://json-server-sik9.onrender.com/userDB?email=${email}`) // Fetch the user object by email
            .then((res) => {
                const user = res.data[0]; // Assuming unique email
                const updatedCart = user.cart.map((item) =>
                    item.id === data.id ? { ...item, quantity: newQuantity } : item
                );

                // Update user cart on the server
                return axios.put(`https://json-server-sik9.onrender.com/userDB/${user.id}`, {
                    ...user,
                    cart: updatedCart,
                });
            })
            .then((res) => {
                console.log("Cart updated successfully:", res.data);
            })
            .catch((err) => console.error("Error updating cart:", err));
    };

    // Handle increasing quantity
    const handlePlus = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateCart(newQuantity);
        setTotalAmount(totalAmount + data.newPrice); // Update total amount in parent
    };

    // Handle decreasing quantity
    const handleMinus = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateCart(newQuantity);
            setTotalAmount(totalAmount - data.newPrice); // Update total amount in parent
        } else if (quantity === 1) {
            // Remove item from the cart
            axios
                .get(`https://json-server-sik9.onrender.com/userDB?email=${email}`) // Fetch the user object by email
                .then((res) => {
                    const user = res.data[0]; // Assuming unique email
                    const updatedCart = user.cart.filter((item) => item.id !== data.id);

                    // Update user cart on the server
                    return axios.put(`https://json-server-sik9.onrender.com/userDB/${user.id}`, {
                        ...user,
                        cart: updatedCart,
                    });
                })
                .then((res) => {
                    console.log("Item removed successfully:", res.data);
                    removeItem(data.id); // Remove item from local state
                    setTotalAmount(totalAmount - curTotal); // Update total amount in parent
                })
                .catch((err) => console.error("Error removing item:", err));
        }
    };

    return (
        <div className="product-card">
            <img src={data.image} alt={data.name} className="product-image" />
            <div className="product-details">
                <p className="product-name"><strong>{data.name}</strong></p>
                <p>
                    <span className="product-price">Rs. {data.newPrice.toFixed(2)}<s> Rs. {data.oldPrice.toFixed(2)}</s></span>
                </p>
                <div className="quantity-controls">
                    <button className="quantity-button" onClick={handleMinus}>-</button>
                    <input type="number" value={quantity} className="quantity-input" readOnly />
                    <button className="quantity-button" onClick={handlePlus}>+</button>
                </div>
                <p className="product-price"><strong>Rs. {curTotal.toFixed(2)}</strong></p>
            </div>
        </div>
    );
}
