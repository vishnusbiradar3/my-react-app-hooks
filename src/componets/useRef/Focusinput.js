import React, { useEffect, useRef } from 'react'

export default function () {

    const inputRef = useRef(null);
    useEffect(() => {

        inputRef.current.focus()
    }, [])
    return (
        <div><input type="text" ref={inputRef} /></div>
    )
}
