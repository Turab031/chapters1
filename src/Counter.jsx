import React, { useState } from "react";

const Counter = () => {
//   const [count, setCount] = useState(0);
    const [state,setState]= useState({count:0,clicks:0})
  return (
    <div>
      <h1>clicked {state.count} times</h1>
      {/* <button onClick={()=>{setCount(count+1),setCount(count+1)}}>clicked</button> */}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >clicked</button>
    </div>
  );
};

export default Counter;
