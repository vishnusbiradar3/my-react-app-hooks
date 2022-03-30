import React, { useEffect, useState } from 'react'
import useDocumentTitle from './Hook/useDocumentTitle'

export default function DoctTitleTwo() {

    const [count,setCount]=useState(0)

    useDocumentTitle(count);
  return (
    <div>


<button onClick={()=>setCount(count+1)}> Count {count}</button>
    </div>
  )
}
