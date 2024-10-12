import axios from "axios";
import { useState } from "react";
import "./CartList.css";

export default function CartList({ data, updateTotalAmount, removeItem,setTotalAmount,totalAmount }) {
    const [quantity, setQuantity] = useState(data.quantity);
    const [curTotal,setCurTotal] = useState(data.quantity*data.newPrice);
    const email = localStorage.getItem("email");

    const handlePlus = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);

        const itemData = {
            id: data.id,
            image: data.image,
            name: data.name,
            oldPrice: data.oldPrice,
            newPrice: data.newPrice,
            quantity: newQuantity,
        };

        axios.put(`http://localhost:8000/${email}/${data.id}`, itemData)
            .then((res) => {
                console.log("Item updated successfully:", res.data.newPrice);
                setTotalAmount(totalAmount+res.data.newPrice); 
                setCurTotal(res.data.quantity*res.data.newPrice);
            })
            .catch(err => console.log("Error updating item:", err));
    };

    const handleMinus = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);

            const itemData = {
                id: data.id,
                image: data.image,
                name: data.name,
                oldPrice: data.oldPrice,
                newPrice: data.newPrice,
                quantity: newQuantity,
            };

            axios.put(`http://localhost:8000/${email}/${data.id}`, itemData)
                .then((res) => {
                    console.log("Item updated successfully:", res);
                    setTotalAmount(totalAmount-res.data.newPrice); 
                    setCurTotal(res.data.quantity*res.data.newPrice);
                })
                .catch(err => console.log("Error updating item:", err));
        } else if (quantity === 1) {
            axios.delete(`http://localhost:8000/${email}/${data.id}`)
                .then((res) => {
                    console.log("Item removed from cart successfully:", res);
                    removeItem(data.id); 
                    
                    
                })
                .catch(err => console.log("Error removing item:", err));
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
