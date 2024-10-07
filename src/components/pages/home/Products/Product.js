import React from 'react';
import "./Product.css";
import Rating from '@mui/material/Rating';
import  ShoppingCartOutlinedIcon  from '@mui/icons-material/ShoppingCartOutlined';
export default function Product({data}){
    return  (
    <div className='ProductThumb' style={{background:data.color}}>
        <div className='imgWrapper'>
        <img class="main-img"  src={data.image} lazy="loaded"/>
        </div>
        <br/>
        <div className='information'>
            <h6 className='title'>{data.name}</h6>
            <span className='rating'> <Rating name="Read-only" value={3} readOnly/></span>
            <span className='brand1 d-block'>By NestFood</span>
            <br/>
            <div className='d-flex align-items-center box'>
                <div className='d-flex align-items-vertical txt'>
                    <span className='price1'>{data.newPrice}</span>
                    <span className='oldprice1'>{data.oldPrice}</span>
                </div>
                <button className='button1'><ShoppingCartOutlinedIcon/> Add</button>
            </div>
        </div>
    </div>)
   
}
