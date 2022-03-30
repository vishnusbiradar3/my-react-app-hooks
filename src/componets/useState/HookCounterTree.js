import React, { useState } from 'react'

export default function HookCounterTree() {
    const [name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value})} 
               />
                <input 
                type="text" 
                value={name.lastName}
                onChange={e=>setName({...name,lastName: e.target.value})}/>
                <h1>Your First name is - {name.firstName}</h1>
                <h1>Your last name is - {name.lastName}</h1>
            </form>
        </div>
    )
}
