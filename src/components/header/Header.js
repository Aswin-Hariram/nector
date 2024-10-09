import "../header/Header.css";
import Modal from 'react-modal';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/logo.png';
import Select from "./Select";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import IconCompare from '../../assets/refresh.svg';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Nav from "../nav/Nav";

import { useState } from "react";
import Login from "./Login";
import { red } from "@mui/material/colors";
export default function Header(){

    const [visible,setVisible] = useState(false);
    const [status,setStatus] = useState();
    
    

    return (
        <header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="srow">
                    <div className='col-sm-2'>
                        <img src={Logo} alt='Logo'/>
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
                            <AutorenewOutlinedIcon className="cart"/>
                            <span className="badge">0</span>
                            Compare
                        </li>
                        <li className="list-inline-item">
                            <FavoriteBorderOutlinedIcon className="cart"/>
                            <span className="badge">0</span>
                            Whislist
                        </li>
                        <li className="list-inline-item">
                            <span><Link to="/Cart"><ShoppingCartOutlinedIcon className="cart"/></Link></span>
                            <span className="badge">0</span>
                            Cart
                        </li>

                         <li className="list-inline-item btn">
                         {
                            !status&&<div>
                         
                            <Button onClick={()=>{setVisible(!visible)}} className="bg-g">Login/Signup</Button>
                            </div>
                         }
                         {
                            status&&<div>
                         
                            <Button onClick={()=>{localStorage.setItem("loginStatus",false); }} style={{background:'red'}}>Signout</Button>
                            </div>
                         }
                        </li>
                        
                        
                    </ul>
                    </div>
                    </div>
                </div>

               
            </div>
            <Nav/>
             {visible && <div className="body-login">


             <Login data={visible} setStatus={setStatus} setVisible={setVisible}/>
             </div>}
        </header>

    );
}