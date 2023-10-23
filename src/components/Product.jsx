import React from 'react'

import dataApi from '../assets/products/data.js'
import './Product.css'
import shopkart_context from './context/Shopkart api.jsx'

import { useContext } from 'react'

const Product = () => {

    const a=useContext(shopkart_context)
    return (

        <div className='app__products' >

                {dataApi.map((image,index)=>(

                < div className='app__product-card' >
         <div className='app__prodcuts-images'>
                <img src={image.image} alt="" />
            </div>
            <div className='app__product_info'>
                <div className='app__product_title'>
                    {image.Title}
                </div>
                <div className='app__product_price' style={{marginTop:'4px'}}>{image.Price}</div>
            </div>
            <button type='button' onClick={()=>a.addToCart(image.id)}
            className='app__custom_button'>Add To cart 
            
              {a.cart[image.id]>0&& `(${a.cart[image.id]})`}</button>
        </div >
        ))}
        </div>

    )

}

export default Product