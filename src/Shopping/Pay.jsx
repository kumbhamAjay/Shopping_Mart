import React, { useContext, useState } from 'react'
import { cartItems } from '../App'
// import { GiH2O } from 'react-icons/gi'

const Pay = () => {
    const{items,setItems,orders,setOrders}=useContext(cartItems)
    const[isOrder,setIsOrder]=useState(false)
    let a=0
    let date=new Date()
    let date2=new Date(`2024-11-${date.getDate()+5}`)
    console.log(date2)
    // console.log(date.getDay())
    // console.log(date.getDate())
    // console.log(date2.get())
    // let deliveryDate=
    if(items.length>0){
        items.forEach(element => {
        a=a+element.price*element.qty
        // console.log(a)
        
    })
    }
    let discount
    // let disText
    // let savedAmount
    if(a<500){
        // setDiscAmount()
        discount=a-(a*5/100)
        // savedAmount=a*5/100
        // disText="Discount for below 500 is 5% Applied"


    }
    else if(a<1500){
        discount=a-(a*7/100)
        // savedAmount=a*7/100
        // disText="Discount for below 1500 is 7% Applied"
    }
    else if(a<5000){
        discount=a-(a*10/100)
        // savedAmount=a*10/100
        // disText="Discount for below 5000 is 10% Applied"

    }
    else if(a<10000){
        discount=a-(a*15/100)
        // savedAmount=a*15/100
        // disText="Discount for below 10000 is 15% Applied"
    }
    else{
        discount=a-(a*20/100)
        // savedAmount=a*20/100
        // disText="Discount for above 10000 is 20% Applied"
    }
    
    const orderHandler=()=>{
        setIsOrder(true)
        setOrders([...orders,items])
        setItems([])
        

    }
  return (
    <>
     <br /><br /><br /><br /><br />
    <div style={{border:"1px solid",padding:"20px"}}>
       
      
      {isOrder?<>
      <h2>Payment Successfull</h2>
      <p>Check your orders</p>
      </>:<>
      <div>
        <p>Select Address</p>
        <input type="text" placeholder='H.No ,Area' />
        <input type="text" placeholder='City' />
        <input type="text" placeholder='Pincode' />
        <input type="text" placeholder='State' />
        <p>Expected Delivery:{date2.toDateString()}</p>
      </div>
      <h4>Select payment option</h4>
      <div>
        <p><i>upi</i></p>

      </div>
      <h1>Pay Amount:Rs.{Math.round(discount)}</h1>
      <button onClick={orderHandler} style={{color:"black"}}>Pay now</button></>
}
      
    </div>
    </>
  )
}

export default Pay
