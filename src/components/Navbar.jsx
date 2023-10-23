import React, { useContext } from 'react'
import {BsCartPlusFill} from 'react-icons/bs'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import './Navbar.css'
import shopkart_context from './context/Shopkart api'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const sum=useContext(shopkart_context)
  return (
    <nav className='app__navbar'>
        <div className='app__website_name'>
            SHOPCART
        </div>
     <Link to="/" className='app__navbar_pages'>
        HOME
        </Link>

     <div className='app__navbar-cartlogo'>
          
            <div style={{color:'white', fontSize:"1.5rem", marginRight:"1rem"}}> {sum.sum}</div>
          
         <Link to ="/cart" > 
        
         <BsCartPlusFill style={{color:"white"}} /></Link>
     </div>
    
       
    </nav>
  )
}

export default Navbar