import React, { useState } from 'react'

const Calculate = () => {
    const[n1,setN1]=useState();
    const[n2,setN2]=useState();
    const[result,setResult]=useState("")
    const addhandler=()=>{
        setResult(+n1+(+n2))
        setN1("")
        setN2("")
    }
    const subHandler=()=>{
        setResult(n1-n2)
        setN1("")
        setN2("")
    }
    const mulHandler=()=>{
        setResult(n1*n2)
        setN1("")
        setN2("")
    }
    const divHandler=()=>{
        setResult(n1/n2)
        setN1("")
        setN2("")
    }

  return (
    <div>
        <input type="number" value={n1} placeholder='Enter Number 1' onChange={(e)=>setN1(e.target.value)} />
        <input type="number" value={n2} placeholder='Enter Number 2'  onChange={(e)=>setN2(e.target.value)} />
        <button onClick={addhandler}>Add</button>
        <button onClick={subHandler}>Substraction</button>
        <button onClick={mulHandler}>Multiplication</button>
        <button onClick={divHandler}>Divison</button>
        <h1>{result}</h1>
      
    </div>
  )
}

export default Calculate
