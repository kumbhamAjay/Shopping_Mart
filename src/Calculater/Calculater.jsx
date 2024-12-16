import React, { useState } from "react";

const Calculater = () => {
  const [result, setResult] = useState(0);
  const[op,setOp]=useState("")

  const handleResult=()=>{
    setResult(eval(op))

    console.log(op)
    setOp("")
  }
  const handleInput=(e)=>{
    setOp(pre=>pre+e.target.value)
    // setResult(op)
    

  }
  const clear =()=>{
    setOp("");
    setResult(0)
  }
  return (
    <div style={{border:"1px solid",width:"200px",height:"200px"}}>
      <div style={{width:"200px",height:"40px",border:"1px solid"}}>{result}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        
        
        <button onClick={handleInput} value={9}>9</button>
        <button onClick={handleInput} value={8}>8</button>
        <button onClick={handleInput} value={7}>7</button>
        <button onClick={handleInput} value={"/"}>/</button>
        <button onClick={handleInput} value={6}>6</button>
        <button onClick={handleInput} value={5}>5</button>
        <button onClick={handleInput} value={4}>4</button>
        <button onClick={handleInput} value={"-"}>-</button>
        <button onClick={handleInput} value={3}>3</button>
        <button onClick={handleInput} value={2}>2</button>
        <button onClick={handleInput} value={1}>1</button>
        <button onClick={handleInput} value={"+"}>+</button>
       
        <button onClick={clear}>C</button>
        <button onClick={handleInput} value={0}>0</button>
        <button value={"*"}>*</button>
        <button onClick={handleResult} value={"="}>=</button>
      </div>
    </div>
  );
};

export default Calculater;
