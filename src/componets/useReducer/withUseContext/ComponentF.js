import React ,{useContext}from 'react'
import { CountContext } from './UseReducerWithUseContext'

export default function ComponentF() {
    const countContext=useContext(CountContext)
  return (

    <div>ComponentF    Count- {countContext.countState}
              <button onClick={()=>countContext.countDispatch('increment')}> Increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}
