import React, { useState } from "react";
import Slider from 'react-slick';
import './CatSlider.css';
import item1 from '../../../../../assets/item1.png'
import item2 from '../../../../../assets/item2.png'
import item3 from '../../../../../assets/item3.png'
import item4 from '../../../../../assets/item4.png'
import item5 from '../../../../../assets/item5.png'

export default function CatSlider(){

    const [itemBg,setItemBg] = useState([
        {color :'#fffceb',image: 'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png',name:"Red Apple"},
         {color :'#ecffec',image: 'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png',name:"Organic Kiwi"},
          {color :'#fffceb',image: 'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png',name: "Peach"},
           {color :'#feefea',image:'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png',name:"Strawberry"},
        {color :'#fff3ff',image:'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png',name:'Custard Apple'},
        {color :'#f2fce4',image:'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-6.png',name:'Green Grapes'},
        {color :'#fff3ff',image:'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-7.png',name:'Organic Orange'},
        {color :'#feefea',image:'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png',name:'Black Plum'},
        {color :'#f2fce4',image:'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png',name:'Cabbage'}
    ]);
       
        
    
   
   var settings  ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade:false,
        arrow:false
    }
    return (
        <div className="CatSliderSection">
            <div className='container-fluid'>
                <h2 className='hd'>Featured Categories</h2>
                
                    <Slider {...settings} className="cat_slider_main" id="cat_slider_main">
                        {
                            itemBg.length!==0&&itemBg.map((item,index)=>{
                                return (
                                    <div className="item" >
                                        <div className="info" style={{background:item.color}}>
                                            <img src={item.image} alt="mango" />
                                            <h5>{item.name}</h5>
                                            <p>26 items</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        
                            
                    </Slider>
            </div>
        </div>
    );
}