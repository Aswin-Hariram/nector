import React from 'react';
import { useState } from 'react';
import Styles from "../header/Select.module.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Select =()=>{

    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectedIndex, setselectedIndex]= useState(0);
    const [selectedItem, setselectedItem]= useState('All Categories');
    const openSelect=()=>{
        setisOpenSelect(!isOpenSelect);
    }
    const CloseSelect=(index,name)=>{
        setselectedIndex(index);
        setisOpenSelect(false);
        setselectedItem(name);
    }
    return(
        <div className='selectDrop position-relative'>
        <span className='openSelect' onClick={openSelect}>{selectedItem} <ArrowDropDownIcon className='arrow'/></span>
       {
            isOpenSelect===true &&

        <div className={Styles.selectDrop}>
            <div className={Styles.searchField}>
                <input type='text'/>
            </div>
                <ul className={Styles.searchResults}>
                    <li onClick={()=>CloseSelect(0,"All Categories")} className={`${selectedIndex===0} ? 'active' :''}`}>All Categories</li>
                    <li onClick={()=>CloseSelect(1,"Category 1")} className={`${selectedIndex===1} ? 'active' :''}`}>Category 1</li>
                    <li onClick={()=>CloseSelect(2,"Category 2")} className={`${selectedIndex===2} ? 'active' :''}`}>Category 2</li>
                    <li onClick={()=>CloseSelect(3,"Category 3")} className={`${selectedIndex===3} ? 'active' :''}`}>Category 3</li>
                    <li onClick={()=>CloseSelect(4,"Category 4")} className={`${selectedIndex===4} ? 'active' :''}`}>Category 4</li>
                    <li onClick={()=>CloseSelect(5,"Category 5")} className={`${selectedIndex===5} ? 'active' :''}`}>Category 5</li>
                    <li onClick={()=>CloseSelect(6,"Category 6")} className={`${selectedIndex===6} ? 'active' :''}`}>Category 6</li>
                    <li onClick={()=>CloseSelect(7,"Categor 7")} className={`${selectedIndex===7} ? 'active' :''}`}>Category 7</li>
                    
                </ul>
        </div>
    }
        </div>
    )
}
export default Select;