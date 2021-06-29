import React,{useState} from 'react'
import Hooksmouse from './Hooksmouse'

function MouseContainer() {
    const[display,setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}> Stop show the values</button>
            {display && <Hooksmouse/>}
        </div>
    )
}

export default MouseContainer
