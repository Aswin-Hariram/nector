import Slider from 'react-slick';
import './CatSlider.css';
import i1 from '../../../../assets/mango.png';


export default function CatSlider(){

   
    var settings  ={
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
    }
    return (
        <div className="CatSliderSection">
            <div className='container-fluid'>
                <h2 className='hd'>Featured Categories</h2>
                 <Slider {...settings} className='cat_slider_main'>
                    <div className='item'>
                        <div className='info'>
                            <img src={i1} alt='mango'/>
                            <h5>Mango</h5>
                            <p>26 items</p>
                        </div>
                        <div className='info'>
                            <img src={i1} alt='mango'/>
                            <h5>Mango</h5>
                            <p>26 items</p>
                        </div>
                        <div className='info'>
                            <img src={i1} alt='mango'/>
                            <h5>Mango</h5>
                            <p>26 items</p>
                        </div>
                        <div className='info'>
                            <img src={i1} alt='mango'/>
                            <h5>Mango</h5>
                            <p>26 items</p>
                        </div>
                        <div className='info'>
                            <img src={i1} alt='mango'/>
                            <h5>Mango</h5>
                            <p>26 items</p>
                        </div>
                        <div className='info'>
                            <img src={i1} alt='mango'/>
                            <h5>Mango</h5>
                            <p>26 items</p>
                        </div>
                        <div className='info'>
                            <img src={i1} alt='mango'/>
                            <h5>Mango</h5>
                            <p>26 items</p>
                        </div>
                        <div className='info'>
                            <img src={i1} alt='mango'/>
                            <h5>Mango</h5>
                            <p>26 items</p>
                        </div>
                    </div>
                    
        
      </Slider>
            </div>
        </div>
    );
}