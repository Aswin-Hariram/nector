import React from 'react';
import { useState } from 'react';
import Styles from "../header/Select.module.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Select =()=>{
    const data = ["All Category","Vegetables","Fruits","Beverages","Snacks"];
    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectedIndex, setselectedIndex]= useState(0);
    const [selectedItem, setselectedItem]= useState("All Category");
    const [listData, setListData] = useState(data);
    const [listData2, setListData2]= useState(data);
    const openSelect=()=>{
        setisOpenSelect(!isOpenSelect);
        
    }
    var updatedCat = listData.map((item)=>{
        return <li onClick={()=>CloseSelect(item.index,item)} className={`${selectedIndex===1} ? 'active' :''}`}  key={item}>{item}</li>;
    });
    const CloseSelect=(index,name)=>{
        setselectedIndex(index);
        setisOpenSelect(false);
        setselectedItem(name);
        
    }

    const filterList=(e)=>{
        const keyword= e.target.value.toLowerCase(); 
        const list=listData2.filter((item)=>{
            return item.toLowerCase().includes(keyword);
        });
       
        const list2=list.filter((item,index)=> list.indexOf(item)===index);
        setListData(list2)
        console.log(listData);
    }
    
    return(
        <div className='selectDrop position-relative'>
        <span className='openSelect' onClick={openSelect}>{selectedItem} <ArrowDropDownIcon className='arrow'/></span>
       {
            isOpenSelect===true &&

        <div className={Styles.selectDrop}>
            <div className={Styles.searchField}>
                <input type='text' placeholder='search' onChange={filterList}/>
            </div>
                <ul className={Styles.searchResults}>
                    
                    {updatedCat}
                    
                </ul>
        </div>
    }
        </div>
    )
}
export default Select;