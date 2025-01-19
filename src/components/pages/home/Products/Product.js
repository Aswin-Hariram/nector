import React, { useContext, useEffect, useState } from 'react';
import "./Product.css";
import DoneIcon from '@mui/icons-material/Done';
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import axios from 'axios';
import { Context } from "../../../../App.js";

export default function Product({ data }) {
    const [count, setCount] = useState(0);
    const [inCart, setInCart] = useState(false);
    const [added, setAdded] = useState(false);
    const email = localStorage.getItem("email");
    const [cartCount, setCartCount] = useContext(Context);

    // Function to handle adding product to cart
    const handleAddToCart = () => {
        const itemData = {
            id: data.id,
            image: data.image,
            name: data.name,
            oldPrice: data.oldPrice,
            newPrice: data.newPrice,
            quantity: count + 1
        };

        // Fetch the user data (current cart)
        axios.get(`https://json-server-sik9.onrender.com/userDB`)
            .then(response => {
                const user = response.data.find(user => user.email === email);
                if (user) {
                    // Check if the product already exists in the cart
                    const existingProduct = user.cart.find(item => item.id === data.id);
                    if (existingProduct) {
                        // Update the existing product's quantity
                        existingProduct.quantity += 1;
                        // Send the updated cart back
                        axios.put(`https://json-server-sik9.onrender.com/userDB/${user.id}`, {
                            ...user,
                            cart: user.cart
                        })
                            .then(() => {
                                console.log("Item quantity updated in cart.");
                                setCount(count + 1);
                                setCartCount(cartCount + 1);
                            })
                            .catch(error => console.error("Error updating cart:", error));
                    } else {
                        // Add new item to cart if it doesn't exist
                        user.cart.push(itemData);
                        axios.put(`https://json-server-sik9.onrender.com/userDB/${user.id}`, {
                            ...user,
                            cart: user.cart
                        })
                            .then(() => {
                                console.log("Item added to cart successfully.");
                                setInCart(true);
                                setCount(count + 1);
                                setCartCount(cartCount + 1);
                            })
                            .catch(error => console.error("Error adding item to cart:", error));
                    }
                }
            })
            .catch(error => console.error("Error fetching user data:", error));
    };

    useEffect(() => {
        // Check if the product is already in the user's cart
        axios.get(`https://json-server-sik9.onrender.com/userDB`)
            .then(res => {
                const user = res.data.find(user => user.email === email);
                if (user) {
                    const productInCart = user.cart.find(item => item.id === data.id);
                    if (productInCart) {
                        setAdded(true); // Mark as "added"
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, [email, data.id]);

    return (
        <div className='ProductThumb' style={{ background: data.color }}>
            <div className='imgWrapper'>
                <img className="main-img" src={data.image} alt={data.name} lazy="loaded" />
            </div>
            <br />
            <div className='information'>
                <h6 className='title'>{data.name}</h6>
                <span className='rating'> <Rating name="Read-only" value={3} readOnly /></span>
                <span className='brand1 d-block'>By NestFood</span>
                <br />
                <div className='d-flex align-items-center box'>
                    <div className='d-flex align-items-vertical txt'>
                        <span className='price1'>Rs.{data.newPrice}</span>
                        <span className='oldprice1'>Rs.{data.oldPrice}</span>
                    </div>

                    {!added ? (
                        <button className='button1' onClick={() => {
                            handleAddToCart();
                            setAdded(true);
                        }}>
                            <ShoppingCartOutlinedIcon /> Add
                        </button>
                    ) : (
                        <button className='added'>
                            <DoneIcon /> Added
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
