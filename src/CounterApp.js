import React, { useState } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const inchandler = () => setCount(prevCount => prevCount + 1);
    const dechandler = () => setCount(prevCount => prevCount - 1);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Counter App</h1>
            <h3>Count: {count}</h3>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={inchandler}>Increment</button>
                <button onClick={dechandler}>Decrement</button>
            </div>
        </div>
    );
};

export default CounterApp;