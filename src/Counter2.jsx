import React, { useState } from 'react'

const Counter2 = () => {
    const [allvalues,setAllvalues]= useState({firstname:"turab",lastname:"manzoor"})
    const handleClick=()=>{
        // setAllvalues({firstname:"najaf",lastname:"alimi"})
        // setAllvalues({...allvalues,firstname:"najaf"})
        setAllvalues({...allvalues,lastname:"alimi"})
    }
  return (

    <div>
        <h1>my first name is {allvalues.firstname} and lastname is {allvalues.lastname}</h1>
        <button onClick={handleClick}>update</button>
    </div>
  )
}

export default Counter2