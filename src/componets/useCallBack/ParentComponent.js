import React, { useCallback, useState } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

export default function ParentComponent() {

    const [age,setAge] =useState(25)
    const [salary,setSalary]=useState(50000)

    const increaseAge =useCallback(()=>{
        setAge(age+1);
    },[age])
    const increaseSalary =useCallback(()=>{
        setSalary(salary + 1000)
    },[salary])

  return (
    <div>
        <Title />
        <Count text="Age" count={age} />
        <Button handleClick={increaseAge}> Increament Age</Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={increaseSalary}>Increament Salary </Button>



    </div>
  )
}
