import React, { useContext, useState } from 'react'
import { cartItems } from '../App';
import { toast } from 'react-toastify';
let users=[{name:"Ajay",mail:"ajay@gmail.com",pass:"1234"}]

const Login = () => {
    
    const[signData,setSignData]=useState({name:"",mail:"",pass:""})
    const notify=(message)=>toast(message);
    
    // const[isLogged,setIslogged]=useState(false)
    const[loginPage,setLoginPage]=useState(true)
    const{isLogged,setIslogged,loginData,setLoginData}=useContext(cartItems)
    const loginHandler=()=>{
        users.forEach((e)=>
        {
            if(e.name==loginData.name&&e.pass==loginData.pass){
                setIslogged(true)
                notify("Logged In Successfully")
                // alert("Logged In Successfully ")


            }
            else{
                notify("Invalid Credentials ")
                // alert("Invalid Credentials ")
            }
        }
        )
    }
    const signHandler=()=>{
        users.push(signData)
        alert("Registered Successfully")
        console.log(signData)
       
        
    }
  return (
    <div style={{width:"100%",height:"100vh",backgroundColor:"#273a4f",display:"flex",justifyContent:"center",alignContent:"center"}}>
    {loginPage?
    <div style={{border:"1px solid",padding:"20px",width:"20%",height:"55%",display:"grid",gridTemplateColumns:"1fr",justifyContent:"center",backgroundColor:"#8199b5",borderRadius:"20px"}}>
    <h2 style={{textAlign:"center"}}>Login</h2>
        <input style={{width:"100%",height:"50px",borderRadius:"10px",fontSize:"20px",border:"none",backgroundColor:"black"}} type="text" value={loginData.n} placeholder='Username' onChange={(e)=>setLoginData({...loginData,name:e.target.value})} /><br/>
        <input style={login} type="password" value={loginData.pass} placeholder='Password' onChange={(e)=>setLoginData({...loginData,pass:e.target.value})} /><br/>
        <button style={{backgroundColor:"green",height:"30px",borderRadius:"10px"}} onClick={loginHandler}>Login</button>
        <span>New User? </span>
        <button style={{color:"black"}} onClick={()=>setLoginPage(false)}>SignUp here</button>
      
    </div>:
    <div style={{border:"1px solid",padding:"20px",width:"20%",height:"55%",display:"grid",gridTemplateColumns:"1fr",justifyContent:"center",backgroundColor:"#8199b5",borderRadius:"20px"}}>
        <h2 style={{textAlign:"center"}}>SignUp</h2>
        <input style={login} type="text" placeholder='Username' onChange={(e)=>setSignData({...signData,name:e.target.value})} /><br/>
        <input style={login} type="mail" placeholder='Mail' onChange={(e)=>setSignData({...signData,mail:e.target.value})} /><br/>
        <input style={login} type="password" placeholder='Password' onChange={(e)=>setSignData({...signData,pass:e.target.value})} /><br/>
        <button style={{backgroundColor:"green",height:"30px",borderRadius:"10px"}} onClick={signHandler}>SignUp</button>
        <p>Already a  User? </p>
        <button style={{color:"black"}}  onClick={()=>setLoginPage(true)}>Login here</button>
    </div>
}
        
    </div>
  )
}

export default Login
const login=
    {width:"100%",height:"50px",borderRadius:"10px",fontSize:"20px",border:"none",backgroundColor:"black"}


