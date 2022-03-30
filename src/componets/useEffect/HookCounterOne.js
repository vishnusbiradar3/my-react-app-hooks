import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name,setName]=useState("");
    useEffect(()=>{
        console.log("try to update tiatle");
        document.title=`You Clicked ${count} times`
    },[count])

    return (
        <div>
            <input
            type="text"
            value={name}
            onChange={e=>(setName(e.target.value))}
            />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne;