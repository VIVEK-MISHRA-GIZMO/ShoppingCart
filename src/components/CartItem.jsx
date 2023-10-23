import React, { useContext } from 'react'
import shopkart_context from './context/Shopkart api'
import "./CartItem.css"
import dataApi from '../assets/products/data.js'
// import shopkart_context from './context/Shopkart api.jsx'


const CartItem = (props) => {
  const numberOfItems=useContext(shopkart_context)
    // const [cart] =useContext(shopkart_context)
  return (
   <>
   
       < div className='app__product-card' >
        
           <div className='app__prodcuts-images'>
             <img src={props.data.image} alt="" />
           </div>
            <div className='app__product_info'>
              <div className='app__product_title'>
               {props.data.Title}
              </div>
             <div className='app__product_price' style={{ marginTop: '4px' }}>{props.data.Price}</div>
           </div>
           
         </div></>
        
         
            
        
  )
}

export default CartItem