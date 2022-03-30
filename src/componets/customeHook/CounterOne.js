import React, { useState } from 'react'
import useCounter from './Hook/useCounter'

function CounterOne() {
const [count,increment,dicrement,reset] =useCounter();
  return (
    <div>
        <h2>Count - {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={dicrement}>Dicrement </button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne