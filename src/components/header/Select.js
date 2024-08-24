import React from 'react';
import Styles from "../header/Select.module.css";
const Select =()=>{
    return(
        <div className='selectDrop position-relative'>
        All Categories
       
   
        <div className={Styles.selectDrop}>
            <div className={Styles.searchField}>
                <input type='text'/>
            </div>
                <ul className={Styles.searchResults}>
                    <li>yghubn</li>
                    <li>cfghbjnm</li>
                    <li>ghjnm</li>
                    <li>ghjnm</li>
                    <li>yghbjn</li>
                    <li>dxrt</li>
                    <li>gvfctf</li>
                </ul>
        </div>
        </div>
    )
}
export default Select;