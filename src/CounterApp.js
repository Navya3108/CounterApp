import React, { useState } from "react";
const  CounterApp=()=>{
    const [count,setCount]=useState(0);
    const inchandler=()=>{
        setCount(count+1);
    };
    const dechandler=()=>{
        setCount(count-1);
    };
    return(
        <div style={{display: "flex",  // Enables Flexbox
            alignItems: "center",  // Centers items vertically
            flexDirection:"column",}}>
            <h1>Counter App</h1>
            <h3>count: {count}</h3>
            <div style={{display:"flex"}}>
            <button onClick={inchandler}>Increment</button>
            <button onClick={dechandler}>Decrement</button>
            </div>
        </div>
    );
}

export default CounterApp;