import { useContext } from "react"
import { cartItems } from "../App"
import { CgProfile } from "react-icons/cg";


const Profile = () => {
    const{loginData,setLoginData}=useContext(cartItems);

  return (
    <div>
        <br /><br /><br /><br /><br /><br />
        <div style={{display:"flex",gap:"50px",alignItems:"center"}}>
        <CgProfile size={100} />
        <h1>{loginData.name}</h1>
        </div>
        {/* <h2>mail:{loginData.mail}</h2> */}
       

      
    </div>
  )
}

export default Profile
