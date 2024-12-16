import { useContext } from 'react'
// import { useParams } from 'react-router-dom'
import { cartItems } from '../App'

const Product = () => {
  
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
        }
      }>
        <h1>{product?product.title:<></>}</h1>
        <h6>{product.category}</h6>
        <div style={{display:"flex",gap:"20px"}}>
          <img  src={product.image} height={100} width={100} alt="" />
          <h4>{product.description}</h4>

          
  
        </div>
        <p>Rating:{product.rating.rate}</p>
        
          
        
      </div>:<>
      <h1>No product selected</h1>
      </>
    }
   
    
    </>
    
  )
}

export default Product
