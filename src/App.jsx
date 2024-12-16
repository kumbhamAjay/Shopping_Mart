import { createContext, Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'

// import './App.css'
import Calculate from './Calculate/Calculate'
import Calculater from './Calculater/Calculater'
import Shopping from './Shopping/Shopping'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Shopping/Cart'
import Product from './Shopping/Product'
import NavBar from './Shopping/NavBar'
import Home from './Shopping/Home'
import Profile from './Shopping/Profile'
import Pay from './Shopping/Pay'
import Orders from './Shopping/Orders'
// import Home from './Matrimony/Home'
export const cartItems=createContext()

function App() {
  const[items,setItems]=useState([])
  const[isLogged,setIslogged]=useState(true)
  const[loginData,setLoginData]=useState({name:"",pass:""});
  const[orders,setOrders]=useState([])
  const[product,setProduct]=useState(null)




  return (
    <Fragment
    >
    <cartItems.Provider value={{items,setItems,isLogged,setIslogged,loginData,setLoginData,orders,setOrders,product,setProduct}}>
    
    <BrowserRouter>
      {/* <Calculate/>
      <Calculater/> */}
      {/* <NavBar></NavBar> */}
      <Routes>
        <Route  element={<Home/>}>
       
        <Route index element={<Shopping/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product' element={<Product item={{}}/>}/>
        <Route path='/shopping' element={<Shopping/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/pay' element={<Pay/>}/>
        <Route path='/orders' element={<Orders/>}/>

        </Route>
       
      

      </Routes>
      
      </BrowserRouter>
      </cartItems.Provider>
      {/* <Home/> */}
    </Fragment>
  )
}

export default App
