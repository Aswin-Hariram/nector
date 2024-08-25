import "../header/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/logo.png';
import Select from "./Select";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import IconCompare from '../../assets/refresh.svg';
import IconWhishlist from '../../assets/icon-heart.svg';
import IconCart from '../../assets/icon-cart.svg';
import Nav from "../nav/Nav";
export default function Header(){
    return (
        <header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <img src={Logo} alt='Logo'/>
                    </div>
                    <div className='col-sm-5'>
                        <div className='headerSearch d-flex align-items-center'>
                          <Select/>
                        
                            <div className='search'>
                                <input placeholder='Search' />
                                <SearchIcon className='searchIcon'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                    <ul className="list list-inline mb-0 header-Tabs">
                        <li className="list-inline-item">
                            <img src={IconCompare} className="compare"></img>
                            <span className="badge">3</span>
                            Compare
                        </li>
                        <li className="list-inline-item">
                            <img src={IconWhishlist} className="whish"></img>
                            <span className="badge">3</span>
                            Whislist
                        </li>
                        <li className="list-inline-item">
                            <img src={IconCart} className="cart"></img>
                            <span className="badge">3</span>
                            Cart
                        </li>
                    </ul>
                    </div>
                </div>

               
            </div>
            <Nav/>
        </header>
            
    );
}