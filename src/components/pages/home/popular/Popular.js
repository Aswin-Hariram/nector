import "./Popular.css";
import Product from '../../home/Products/Product';
import { useEffect, useState } from "react";
import axios from "axios";
export default function Popular(){
        const [data,setData] = useState([]);
        useEffect(()=>{
            axios.get("https://json-server-sik9.onrender.com/products")
            .then(res=>{setData((res.data))})
            .catch(err=>{console.log(err)});
        },[]);
     
    return(
        <section className="homeProducts">
        <div className="container-fluid">
            <div className="d-flex align-items-center pop" >
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <div className="list">
            <ul className=" list-inline ml-auto filterTabs">
                <li className="list-inline-item ">
                    <a className="cursor">All</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Fruits</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Vegetables &amp; Organising</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Milk</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Eggs</a>
                </li>
                <li className="list-inline-item">
                    <a className="cursor">Snacks</a>
                </li>
            </ul>
            </div>
            </div>
        </div>
        <div className="productRow">
           {
                data.length!==0&&data.map((item,index)=>{
                    return (
                        
                            <div key={index} className="item">
                                    <Product key={index} data={item}/>
                                
                             </div>
                        
                    );
                })
}
        </div>
     </section>
    );
}