import React from "react";
import Slider from "react-slick";
import slide1 from '../../../../../assets/banner1.png'
import slide2 from '../../../../../assets/banner2.png'
import slide3 from '../../../../../assets/mbanner3.png'
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
                  
                    
                     
                </div>
                <div className="item">
                    <img src={slide1} alt="bg1" className="w-100"/> 
                    
                </div>
                <div className="item">
                    <img src={slide3} alt="bg1" className="w-100"/> 
                    
                </div>
              
            </Slider>
             

        </section>
       
    </div>


  );
}