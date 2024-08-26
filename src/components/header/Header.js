import "../header/Header.css";
import Modal from 'react-modal';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/logo.png';
import Select from "./Select";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import IconCompare from '../../assets/refresh.svg';
import IconWhishlist from '../../assets/icon-heart.svg';
import IconCart from '../../assets/icon-cart.svg';
import Nav from "../nav/Nav";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import { useState } from "react";
export default function Header(){

    const [visible,setVisible] = useState(false);
    

    return (
        <header>
            <Nav/>
            
            <div className='container-fluid'>
                <div className='row'>
                    <div className="srow">
                    <div className='col-sm-2 part1 d-flex align-items-center'>
                    <Button className='bg-g text-white catTab'>
                        <GridViewIcon/> &nbsp;Browse All Categories
                    <KeyboardArrowDownIcon/></Button>
                </div>
                   
                    <div className='col-sm-5 search_box'>
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

                         <li className="list-inline-item btn">
                            <Button onClick={()=>{setVisible(!visible)}} className="bg-g">Login/Signup</Button>
                        </li>
                        
                        
                    </ul>
                    </div>
                    </div>
                </div>

               
            </div>
            <hr/>
            

            <Modal  style={{
                overlay:{
                    background:'#ffff'
                }
            }} isOpen={visible} onRequestClose={()=>{setVisible(false)} }>
               
                   

               
            </Modal>
        </header>

    );
}