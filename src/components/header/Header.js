import "../header/Header.css";
import Modal from 'react-modal';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/logo.png';
import Select from "./Select";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import IconCompare from '../../assets/refresh.svg';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Nav from "../nav/Nav";

import { useEffect, useState } from "react";
import Login from "./Login";
import { red } from "@mui/material/colors";
import axios from "axios";
export default function Header() {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState([]);
    const [visible, setVisible] = useState(false);
    const [status, setStatus] = useState(localStorage.getItem("loginStatus"));



    useEffect(() => {
        axios.get('http://localhost:8000/cart')
            .then((response) => {
                setCartItems(response.data);
            })
            .catch(err => console.log(err));
    }, [])

    function SignOut() {
        localStorage.setItem("loginStatus", "false");
        localStorage.setItem("email", "");
        setStatus("false");
    }


    return (
        <header>

            <div className='container-fluid'>
                <div className='row'>
                    <div className="srow">
                        <div className='col-sm-2'>
                            <img src={Logo} alt='Logo' />
                        </div>
                        <div className='col-sm-5 search_box'>
                            <div className='headerSearch d-flex align-items-center'>
                                <Select />

                                <div className='search'>
                                    <input placeholder='Search' />
                                    <SearchIcon className='searchIcon' />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <ul className="list list-inline mb-0 header-Tabs">
                                <li className="list-inline-item">
                                    <AutorenewOutlinedIcon className="cart" />
                                    <span className="badge">0</span>
                                    Compare
                                </li>
                                <li className="list-inline-item">
                                    <FavoriteBorderOutlinedIcon className="cart" />
                                    <span className="badge">0</span>
                                    Whishlist
                                </li>
                                <li className="list-inline-item">
                                    <span><Link to="/Cart"><ShoppingCartOutlinedIcon className="cart" /></Link></span>
                                    <span className="badge">{0}</span>
                                    Cart
                                </li>




                                <li className="list-inline-item btn">
                                    {
                                        status === "false" && <div>

                                            <Button onClick={() => { setVisible(!visible) }} className="bg-g">Login/Signup</Button>
                                        </div>
                                    }
                                    {
                                        status === "true" && <div>

                                            <Button onClick={() => { SignOut(); }} style={{ background: 'red' }}>Signout</Button>
                                        </div>
                                    }
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <Nav />
            {visible && <div className="body-login">


                <Login data={visible} setStatus={setStatus} setVisible={setVisible} />
            </div>}
        </header>

    );
}