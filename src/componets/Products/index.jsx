import { useState } from "react"

const Products=()=>{
const [input,setinput]=useState('');
const [Products,setProducts]=useState([]);



const oninput=(e)=>{
const {value}=e.target  
setinput(value);
};
const onadd=()=>{

let iteam={
    label :input,
    id: Date.now(),
};

// why we use list and key   {ans}---->>>
//  id aur key is use iss liye krta hi jo
//  ki agr ahum kuch bhi delete krta hai toh woo hemsa unique yanijis id ko delete sirf whi ho au rkoi naa ho 
setProducts([...Products,iteam])
setinput("");
};
    return(
        <div>
            <input vlaue={input}  onChange={oninput} placeholder="Add new Product " />
            <button onClick={onadd}  >ADD</button>
        <ul>
    {Products.map((i) => (
        <li key={i.id}>
            <span>{i.label}</span>
        </li>
    ))} 

        </ul>
        </div> 





       
    )
    }
    
    export default Products;