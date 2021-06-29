import React,{useState} from 'react'
import useInput from './Hooks/useInput'

function Userform() {
    const[firstname,bindfirstname,resetfirstname]=useInput('')
    const[lastname,bindlastname,resetlastname]=useInput('')
   
    const submithandler=e=>{
            e.preventDefault()
            alert(`hello ${firstname} ${lastname}`)
            resetfirstname()
            resetlastname()
    }
    return (
        <div>
            <form  onSubmit={submithandler}>
                <div>
                    <label>First Name</label>
                    <input type="text"
                    {...bindfirstname}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text"
                     {...bindlastname} />
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Userform
