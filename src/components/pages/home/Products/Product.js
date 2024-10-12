import React, { useEffect, useState } from 'react';
import "./Product.css";
import DoneIcon from '@mui/icons-material/Done';
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import axios from 'axios';
export default function Product({ data }) {
    const [count, setCount] = useState(0);
    const [inCart, setInCart] = useState(false);
    const [added,setAdded] = useState(false);
    const email = localStorage.getItem("email");


    const handleAddToCart = () => {
        
        const itemData = {
                id:data.id,
                image: data.image,
                name: data.name,
                oldPrice: data.oldPrice,
                newPrice: data.newPrice,
                quantity: count+1  
        }

        axios.post(`http://localhost:8000/${email}`, itemData)
            .then(response => {
                console.log("Item added to cart successfully:", response.data);
                setInCart(true);
                setCount(count + 1);
            })
            .catch(error => {
                console.error("Error adding item to cart:", error);
            });
        
    };
    useEffect(()=>{
        axios.get(`http://localhost:8000/${email}/${data.id}`)
        .then(res=>{
            console.log(res.data);
            setAdded(true);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

   

    return (
        <div className='ProductThumb' style={{ background: data.color }}>
            <div className='imgWrapper'>
                <img className="main-img" src={data.image} lazy="loaded" />
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
                        <button className='button1' onClick={()=>{
                            handleAddToCart();
                            setAdded(true);
                        }}><ShoppingCartOutlinedIcon /> Add</button>
                    ) : (
                        <button className='added' ><DoneIcon /> Added</button>
                
                    )}
                </div>
            </div>
        </div>)

}
