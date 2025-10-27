import React, { useEffect, useState } from 'react'

const Ue = () => {
    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(10)
    // syntax
    useEffect(()=>{
        console.log("learning use effect")
    },[number])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <br />
        <br />
        <button onClick={()=>setNumber(number-1)}>decrement</button>
        <h2>{number}</h2>

    </div>
  )
}

export default Ue