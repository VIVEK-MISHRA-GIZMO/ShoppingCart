import dataApi from "../../assets/products/data";
import shopkart_context from "./Shopkart api";
import  React ,{ useRef, useState } from "react";



const Shopkart = (props) => {
   

  const getDefaultCart = () => {
    let cartobj = {};
    for (let i = 1; i < dataApi .length + 1; i++) {
      cartobj[i] = 0;
    }
    return cartobj;
  };
const[cart,setCart]=useState(getDefaultCart());
const addToCart=(itemid)=>{
  //  console.log(cart)
  //  console.log(itemid)
    setCart((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    // console.log(cart)
}
let sum=0;
const values = Object.values(cart);
console.log(values)
const productcount=()=>{
   for (let i = 0; i <values.length; i++) {
   
    sum=sum+values[i]
    
  }return sum;

}
sum=productcount()
console.log('sum '+sum)


  return (
    <shopkart_context.Provider value={{cart,addToCart,sum}}>{props.children}</shopkart_context.Provider>
  )
}

export default Shopkart