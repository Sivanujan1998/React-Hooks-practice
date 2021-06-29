import React,{useState} from 'react'

function Hoockscounterthree() {
    const [name,setname]=useState({firstname:'',lastname:''})
    return (
        <div>
            <form>
                <input type="text" value={name.firstname} onChange={(e)=>setname({...name,firstname:e.target.value})}/>
                <input type="text" value={name.lastname} onChange={(e)=> setname({...name, lastname:e.target.value})}/>
                <h2>Your Firstname is = {name.firstname}</h2>
                <h2>Your lastname is = {name.lastname}</h2>
                  
            </form>
        </div>
    )
}

export default Hoockscounterthree
