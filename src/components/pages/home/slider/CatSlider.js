import Slider from 'react-slick';
import './CatSlider.css';
export default function CatSlider(){

    var settings  ={
        dots:true,
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll : 1,
        fade:true,
        arrows:true
    }
    return (
        <div className="CatSliderSection">
            <div className='container-fluid'>
                <h2 className='hd'>Featured Categories</h2>
                <Slider {...settings} className='cat_slider_main'>

                </Slider>
            </div>
        </div>
    );
}