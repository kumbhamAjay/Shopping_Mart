import  { useContext } from 'react'
// import './style.css'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Login from './Login'
import { cartItems } from '../App'

const Home = () => {
  const{isLogged}=useContext(cartItems)
  return (
    <div className='Home' style={{backgroundColor:"#263040"}}>

     
      {  
      isLogged?<>
      <NavBar/>
      <Outlet/></>:<> <Login/></>}
    
      
    </div>
  )
}

export default Home
