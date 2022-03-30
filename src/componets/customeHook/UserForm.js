import React, { useState } from 'react'
import useInput from './Hook/useInput'

function UserForm() {
    const [firstName,bindFirstName,resetFirstName]=useInput('');
    const [lastName,bindLastName,resetLastName]=useInput('');


    const submitHandler = e => {
        // e.preventDefault()
        e.preventDefault()
    alert(`Hellow ${firstName} ${ lastName }`)
    resetFirstName();
    resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
            <label>First Name  </label>
                <input type="text" 
               {...bindFirstName}/>
               
               
              
            <label>Last  Name 
                 
                
                </label>
                <input type="text" {...bindLastName} />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm