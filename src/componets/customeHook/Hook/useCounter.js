import React ,{ useState }from 'react'

function useCounter(initialCount=0,value=1) {

    const [count,setCount ]=useState(initialCount)

const increment =()=>{
    setCount(count+value)
}
const dicrement =()=>{
    setCount(count-value)
}
const reset =()=>{
    setCount(initialCount)
}
  return [count,increment,dicrement,reset]
}

export default useCounter