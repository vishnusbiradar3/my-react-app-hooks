import React, { useState } from 'react'

export default function HookCounterTwo() {
    const intialCounter = 0;
    const [count, setCount] = useState(intialCounter);

    const incrementFive = () => {

        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
    
        }
    }
    return (
        <div>
            <h1>count {count}</h1>
            <button onClick={() => setCount(intialCounter)}> Reset</button>
            <button onClick={() => setCount(prevCount => prevCount+ 1)}> Increament</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>  Increament five</button>
        </div>
    )
}
