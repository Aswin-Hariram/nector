import React from 'react';
import '../nav/Nav.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Nav=()=>{
    return(
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-sm-3 part1'>
                    <Button className='bg-g text-white catTab'>Browse All Categories
                    <KeyboardArrowDownIcon/></Button>
                </div>
                <div className='col-sm-7 part2'>
                    <nav>

                    </nav>
                </div>
                <div className='col-sm-2 part3'>

                </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;