import React from "react";
import "../nav/Nav.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

const Nav = () => {
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          {/* Browse Categories */}
          <div className="col-md-3 part1 d-flex align-items-center">
            <Button className="bg-g text-white catTab">
              <GridViewIcon /> &nbsp;Browse All Categories
              <KeyboardArrowDownIcon />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="col-md-7 part2">
            <nav>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Button>
                    <Link to="/Home">Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/Deals">Deals</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/About">About</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/Shops">Shops</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/Vendors">Vendors</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link to="/Contact">Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Support Section */}
          <div className="col-md-2 part3 d-flex align-items-center">
            <div className="phNo d-flex align-items-center">
              <HeadphonesOutlinedIcon className="support-icon" />
              <div className="info ml-3">
                <h3 className="text-g">1900-888-000</h3>
                <p className="mb-0">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
