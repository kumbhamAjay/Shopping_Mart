import { useState } from "react";


function Cal1() {
    const[data,setData]=useState("")

    function handelCal(val){
        setData([...data,val]);

    }
  return (
    <div>
        <div className='input'>
            <input value={data} />
        </div>
        <div className='button'>
            <button value={"C"} onClick={(e)=>handelCal(e.target.value)}>C</button>
            <button value={"("}>(</button>
            <button value={")"}>)</button>
            <button value={""}></button>
        </div>
        <div className='button'>
            <button value={1}onClick={(e)=>handelCal(e.target.value)}>1</button>
            <button value={2} onClick={(e)=>handelCal(e.target.value)}>2</button>
            <button value={3}onClick={(e)=>handelCal(e.target.value)}>3</button>
            <button value={"/"}>/</button>
            
        </div>
        <div className='button'>
            <button value={4}>4</button>
            <button value={5}>5</button>
            <button value={6}>6</button>
            <button value={"+"}>+</button>
        </div>
        <div className='button'>
            <button value={7}>7</button>
            <button value={8}>8</button>
            <button value={9}>9</button>
            <button value={"-"}>-</button>
            
        </div>
        
        <div className='button'>
            <button value={0}>0</button>
            <button value={"."}>.</button>
            <button value={"%"}>%</button>
            <button value={"="}>=</button>
            
        </div>


    </div>

  )
}

export default Cal1