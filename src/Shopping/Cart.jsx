import { useContext, useState } from 'react'
import { cartItems } from '../App'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Cart = () => {
    // const discount={
    //     "Below Rs.500":5,
    //     "Below Rs.1500":7,
    //     "Below Rs.5000":10,
    //     "Below Rs.10000":15


    // }
    // const[discAmount,setDiscAmount]=useState(0)
    const{items,setItems,setProduct}=useContext(cartItems)
    // const[amount,setAmount]=useState(0);
    // console.log(items)
    let a=0;
    if(items.length>0){
        items.forEach(element => {
        a=a+element.price*element.qty
        // console.log(a)
        
    })
    
    }
    let discount
    let disText
    let savedAmount
    if(a<500){
        // setDiscAmount()
        discount=a-(a*5/100)
        savedAmount=a*5/100
        disText="Discount for below 500 is 5% Applied"


    }
    else if(a<1500){
        discount=a-(a*7/100)
        savedAmount=a*7/100
        disText="Discount for below 1500 is 7% Applied"
    }
    else if(a<5000){
        discount=a-(a*10/100)
        savedAmount=a*10/100
        disText="Discount for below 5000 is 10% Applied"

    }
    else if(a<10000){
        discount=a-(a*15/100)
        savedAmount=a*15/100
        disText="Discount for below 10000 is 15% Applied"
    }
    else{
        discount=a-(a*20/100)
        savedAmount=a*20/100
        disText="Discount for above 10000 is 20% Applied"
    }
    const removeHandler=(e)=>{
        const i=items.filter((each)=>{
            if(each.id!=e.id){
                return each
            }

        })
        setItems(i)
    }
    // setDiscAmount(discount)

  return (
    <>
     <br /><br /><br /><br /><br />
    <div style={
        {
            border:"1px solid",
            borderRadius:"20px",
            padding:"30px",
            backgroundColor:"grey"
        }
    }>
       
        <h1>Cart </h1>
        {
            items.length>0?items.map((each,i)=>{

                return(
                    
                    <div key={i} style={{display:"grid",margin:"20px",padding:"20px",gridTemplateColumns:"1fr 2fr 1fr 1fr",borderRadius:"20px",boxShadow:"0 0 20px grey",backgroundColor:"black"}}>
                        <div><img src={each.image} width={70} height={70} alt="" /></div>
                        
                        <Link to={"/product"}><div onClick={()=>setProduct(each)}><p>{each.title}</p></div></Link>
                        
                        <div><h5>Qty:{each.qty}</h5><h4>Rs.{Math.round(each.price)*each.qty}</h4></div>
                        
                       <div style={{display:"grid",justifyContent:"center",alignItems:"center"}}><MdDelete size={30} onClick={()=>removeHandler(each)} /></div>

                    </div>
                    
                )

            }):<h4>No items Added</h4>
        }
      
    </div>
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",position:"fixed",bottom:"0px",height:"100px",backgroundColor:"white",width:"100%",boxShadow:"0 0 10px grey"}}>
        <h4 style={{color:"black"}}>Total Amount:Rs.{Math.round(a)}</h4> 
        {a>0?
        <div style={{display:"flex",gap:"20px",justifyContent:"center",alignItems:"center"}}>
            <p style={{color:"black"}}>{disText}</p>
            <h4 style={{color:"black"}}>Saved Amount:Rs.{Math.round(savedAmount)}</h4>
            <h4 style={{color:"black"}}>Amount after Discount:Rs.{Math.round(discount)}</h4>
            
            
            <Link to={"/pay"}><button style={{width:"200px",height:"40px",backgroundColor:"yellowgreen",borderRadius:"10px",cursor:"pointer",margin:"10px"}}>Buy Now</button></Link>
        </div>
        
        :<></>}
    </div>
    </>
  )
}

export default Cart
