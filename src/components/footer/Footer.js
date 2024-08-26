import React from 'react';
import './Footer.css';
import fBanner1 from '../../assets/fbanner1.png';
import fBanner2 from '../../assets/fbanner2.png';
import fBanner3 from '../../assets/fbanner3.png';
import fBanner4 from '../../assets/fbanner4.png';
import fBanner5 from '../../assets/fbanner5.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import GooglePlayIcon from "../../assets/googleplay.png"
import AppleStoreIcon from "../../assets/applestore.png"
const Footer=()=>{
    return(
        <div className='footerWrapper'>
            <div className='footerBoxes'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='box d-flex align-items-center w-100'>
                                <span><img src={fBanner1}/></span>
                                
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box d-flex align-items-center w-100'>
                               <span><img src={fBanner2}/></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box d-flex align-items-center w-100'>
                                <span><img src={fBanner3}/></span>
                                
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box d-flex align-items-center w-100'>
                                <span><img src={fBanner4}/></span>
                                <div className='info'>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='box d-flex align-items-center w-100'>
                                <span><img src={fBanner5}/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <footer>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 part1'>
                        <h3>Details</h3>
                        <p>Awesome grocery store website template</p>
                        <p><LocationOnOutlinedIcon/> <strong>Address:</strong> 45, Anna Nagar, South Ukkadam, Coimbatore, 641-001</p>
                        <p><CallIcon/> <strong>Call Us:</strong> 1900-888-000</p>
                        <p><EmailOutlinedIcon/> <strong>Email:</strong> nector@gmail.com</p>
                        <p><WatchLaterOutlinedIcon/> <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                    </div>
                    <div className='col-md-8 part2'>
                        <div className='row d-flex' >
                            <div className='col d-flex'>
                                <ul className='footer-list mb-sm-5 mb-md-0'>
                                    <h3>Company</h3>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Delivery Information</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">Terms &amp; Conditions</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Support Center</Link></li>
                                    <li><Link to="#">Careers</Link></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='footer-list mb-sm-5 mb-md-0'>
                                    <h3>Account</h3>
                                    <li><Link to="#">Sign in</Link></li>
                                    <li><Link to="#">ViewCart</Link></li>
                                    <li><Link to="#">My Wishlist</Link></li>
                                    <li><Link to="#">Track MyOrder</Link></li>
                                    <li><Link to="#">Help Ticket</Link></li>
                                    <li><Link to="#">Shipping Details</Link></li>
                                    <li><Link to="#">Compare products</Link></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='footer-list mb-sm-5 mb-md-0'>
                                    <h3>Corporate</h3>
                                    <li><Link to="#">Sell on Snooplay</Link></li>
                                    <li><Link to="#">Affiliate Program</Link></li>
                                    <li><Link to="#">Bulk Purchase</Link></li>
                                    <li><Link to="#">Corporate Order</Link></li>
                                    <li><Link to="#">Our Suppliers</Link></li>
                                    <li><Link to="#">Accessibility</Link></li>
                                    <li><Link to="#">Compare products</Link></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='footer-list mb-sm-5 mb-md-0'>
                                    <h3>Popular</h3>
                                    <li><Link to="#">Barbie &amp; Teddy</Link></li>
                                    <li><Link to="#">Remote Controlled Toys</Link></li>
                                    <li><Link to="#">Eggs Substitutes</Link></li>
                                    <li><Link to="#">Marmalades</Link></li>
                                    <li><Link to="#">Sour Cream and Dips</Link></li>
                                    <li><Link to="#">Tea &amp; Kombucha</Link></li>
                                    <li><Link to="#">Cheese</Link></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='footer-list mb-sm-5 mb-md-0'>
                                    <h3>Install Apps</h3>
                                    <li><Link to="#">Install Android App</Link></li>
                                    <li><img src={GooglePlayIcon} /></li>
                                    <li><Link to="#">Install IOS App</Link></li>
                                    <li><img src={AppleStoreIcon} /></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='row lastStrip'>
                    <div className='col-md-3'>
                        &#169; 2022, Nest-HTML Ecommerce Template All rights reserved
                    </div>
                    
                    <div className='col-md-3 part3'>
                        <div className='d-flex align-items-center box'>
                            <h5>Follow Us: </h5>
                            <ul className='list list-inline align-self-end'>
                                <li className='list-inline-item'>
                                <Link to="#"><FacebookRoundedIcon/></Link>
                                </li>
                                <li className='list-inline-item'>
                                <Link to="#"><WhatsAppIcon/></Link>
                                </li>
                                <li className='list-inline-item'>
                                <Link to="#"><InstagramIcon/></Link>
                                </li>
                                <li className='list-inline-item'>
                                <Link to="#"><YouTubeIcon/></Link>
                                </li>
                                <li className='list-inline-item'>
                                <Link to="#"><XIcon/></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
           </footer>
        </div>

    )
}
export default Footer;