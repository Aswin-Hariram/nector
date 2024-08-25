import React from 'react';
import '../nav/Nav.css';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import Home from '../pages/home/Home';
const Nav=()=>{
    return(
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row' >
                <div className='col-sm-3 part1 d-flex align-items-center'>
                    <Button className='bg-g text-white catTab'>
                        <GridViewIcon/> &nbsp;Browse All Categories
                    <KeyboardArrowDownIcon/></Button>
                </div>
                <div className='col-sm-7 part2'>
                    <nav>
                        <ul className='list list-inline mb-0'>
                            <li className='list-inline-item'>
                                <Button><Link to="/Home">Home</Link></Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button><Link to="/About">About</Link></Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button><Link>Deals</Link></Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button><Link>Shops</Link></Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button><Link>Vendors</Link></Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button><Link>Contact</Link></Button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='col-sm-2 part3 d-flex align-items-center'>
                    <div className='phNo d-flex align-items-center'>
                        <span><HeadphonesOutlinedIcon/></span>
                        <div className='info ml-3'>
                            <h3 className='text-g'>1900-888-000</h3>
                            <p className='mb-2'>24/7 Support Center</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;