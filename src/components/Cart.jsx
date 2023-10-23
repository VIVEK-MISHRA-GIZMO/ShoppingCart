import React, { useContext } from 'react'
import dataApi from '../assets/products/data'
import shopkart_context from './context/Shopkart api'
import CartItem from './CartItem'

const Cart = () => {

  
  const {cart} = useContext(shopkart_context)
  console.log(cart)

  return (
    <div className='app__Cart'>
      <h1 style={{textAlign:'center', margin:'1rem'}}>Items in Cart</h1>
{dataApi.map((product) => {
          if (cart[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
          
     
          
        
    </div>
  )
}

export default Cart