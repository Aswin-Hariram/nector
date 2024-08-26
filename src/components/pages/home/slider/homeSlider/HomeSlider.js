import React from "react";
import Slider from "react-slick";
import slide1 from '../../../../../assets/banner1.png'
import slide2 from '../../../../../assets/banner2.png'
import "./HomeSlider.css";
import Button from '@mui/material/Button';


export default function HomeSlider(){
  var settings  ={
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrow:true
    }
  return (
    <div className="homeSlider">
        <section className="container-fluid position-relative">
            <Slider {...settings} className="home_slider_main">
                <div className="item">
                    <img src={slide2} alt="bg1" className="w-100" /> 
                    <div className="info">
                        <h2 className="mb-4">
                        Don't miss amazing<br/>
                        grocery deals
                        </h2>
                        <p>Sign up for the daily newsletter</p>
                    </div>
                     
                </div>
                <div className="item">
                    <img src={slide1} alt="bg1" className="w-100"/> 
                     <div className="info">
                        <h2 className="mb-4">
                        Fresh Vegetables<br/>
                        Big Discount
                        </h2>
                        <p>Sign up for the daily newsletter</p>
                       
                    </div>
                </div>
              
            </Slider>
              <div className="newsletter_banner">
                        
                        <input type="text" placeholder="Your email address"/>
                        <Button className="bg-g">Subscribe</Button>
                    </div>

        </section>
       
    </div>


  );
}