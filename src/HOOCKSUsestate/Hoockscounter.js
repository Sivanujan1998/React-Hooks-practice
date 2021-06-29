import React,{useState} from 'react'

function Hoockscounter() {
    const [count,setCount] = useState(0) //0 is defailt value
//Array Destucturing


    return (
        <div>
            <button onClick={()=>setCount(count+3)}>count value {count}</button>
        </div>
    )
}

export default Hoockscounter
