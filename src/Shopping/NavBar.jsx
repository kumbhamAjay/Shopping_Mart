import React, { useContext, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './shop.css'
import { cartItems } from '../App'

const NavBar = () => {
  const{items,setItems}=useContext(cartItems)
  // const[count,setCount]=useState(0)
  let a=0
  for(let i=0;i<items.length;i++){
    a=a+items[i].qty
  }
  // setCount(a)
    // const{items,setItems}=useContext(cartItemstems)
  return (
    <div className='nav' style={{display:"flex",position:"fixed",zIndex:"2",height:"50px"}}>
        <div><Link to={"/shopping"} style={{textDecoration:"none"}}>Home</Link></div>
        <div><Link to={"/profile"} style={{textDecoration:"none"}}>My Account</Link></div>
        <div><Link to={"/orders"} style={{textDecoration:"none"}}>My Orders</Link></div>
        <div style={{position:"relative"}}>
        <Link to="/cart">
          <FaShoppingCart
            size={30}
            style={{position:"absolute",top:"18%" }}
          />
        </Link>
        <p style={{position:"absolute",top:"-8px",right:"40%",height:"20px",width:"20px",fontSize:"15px",borderRadius:"50%",color:"white",backgroundColor:"red",textAlign:"center"}}>{a}</p>
        </div>
      
    </div>
  )
}

export default NavBar
