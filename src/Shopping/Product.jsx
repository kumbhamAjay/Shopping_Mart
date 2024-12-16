import { useContext } from 'react'
// import { useParams } from 'react-router-dom'
import { cartItems } from '../App'

const Product = () => {
  console.log(window.location)
  
  const{product}=useContext(cartItems)
    // console.log(product)
  return (
    <>
    <br /><br /><br />
    {
      product? <div style={
        {
          backgroundColor:"whitesmoke",
          padding:"50px",
          borderRadius:"50px",
          color:"black"
        }
      }>
        <h1 style={{color:"black"}}>{product?product.title:<></>}</h1>
        <h6 style={{color:"black"}}>{product.category}</h6>
        <div style={{display:"flex",gap:"20px"}}>
          <img  src={product.image} height={100} width={100} alt="" />
          <h4 style={{color:"black"}}>{product.description}</h4>

          
  
        </div>
        <p  style={{color:"black"}}>Rating:{product.rating.rate}</p>
        
          
        
      </div>:<>
      <h1>No product selected</h1>
      </>
    }
   
    
    </>
    
  )
}

export default Product
