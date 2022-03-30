import React, { useState } from 'react'
import useCounter from './Hook/useCounter'

function CounterTwo() {
    const [count,increment,dicrement,reset] =useCounter(10,10);
  return (
    <div>
        <h2>Count - {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={dicrement}>Dicrement </button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo