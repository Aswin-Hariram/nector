import "../header/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../assets/logo.png";
import Select from "./Select";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Nav from "../nav/Nav";
import Login from "./Login";
import { useContext, useState } from "react";
import { Context } from "../../App";

export default function Header() {
    const [cartCount] = useContext(Context); // Get cartCount from Context
    const [visible, setVisible] = useState(false);
    const [status, setStatus] = useState(localStorage.getItem("loginStatus") === "true");

    // Handle sign-out logic with page reload
    const handleSignOut = () => {
        localStorage.setItem("loginStatus", "false");
        localStorage.removeItem("email");
        setStatus(false); // Update state
        window.location.replace("/"); // Reload and redirect to root page
    };

    return (
        <header>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-2 text-center">
                        <img src={Logo} alt="Logo" className="logo" />
                    </div>
                    <div className="col-md-5 search-box">
                        <div className="header-search d-flex align-items-center">
                            <Select />
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <SearchIcon className="search-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <ul className="list-inline mb-0 header-tabs d-flex justify-content-end align-items-center">
                            <li className="list-inline-item position-relative">
                                <AutorenewOutlinedIcon className="icon" style={{ fontSize: 33 }} />
                                <span className="badge">0</span> <strong>Compare</strong>
                            </li>
                            <li className="list-inline-item position-relative">
                                <FavoriteBorderOutlinedIcon className="icon" style={{ fontSize: 33 }} />
                                <span className="badge">0</span> <strong>Wishlist</strong>
                            </li>
                            <li className="list-inline-item position-relative">
                                <Link to="/Cart" className="Link">
                                    <ShoppingCartOutlinedIcon className="icon" style={{ fontSize: 33, color: "black" }} />
                                </Link>
                                <span className="badge">{cartCount}</span> <strong>Cart</strong>
                            </li>
                            <li className="list-inline-item">
                                {status ? (
                                    <Button onClick={handleSignOut} className="signout-btn">
                                        Sign Out
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => setVisible((prev) => !prev)}
                                        className="bg-g login-btn"
                                    >
                                        Login/Signup
                                    </Button>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Nav />
            {visible && (
                <div className="body-login">
                    <Login setStatus={setStatus} setVisible={setVisible} />
                </div>
            )}
        </header>
    );
}
