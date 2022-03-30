import React, { useState, useMemo } from 'react'

export default function Counter() {

    const [countOne,setCountOne]=useState(0);
    const [countTwo,setCountTwo]=useState(0)


    const incrementOne =()=>{
        setCountOne(countOne+1)
    }
    const incrementTwo =()=>{
        setCountTwo(countTwo+1)
    }
    const isEven = useMemo(()=> {
        let i=1;
        while(i<200000000) i++
        return countOne %2===0
    
    },[countOne])

    
    return (
    <div>
        

        <button onClick={incrementOne}>count one {countOne}</button>
        <h1>{isEven?'even':'odd'}</h1>
        <button onClick ={incrementTwo}>Count Two {countTwo}</button>
    </div>
  )
}
