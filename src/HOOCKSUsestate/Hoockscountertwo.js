import React,{useState} from 'react'

function Hoockscountertwo() {
    const initialcount=0
    const[count ,setcount]=useState(initialcount)

     const incrementfive = ()=>{
            for(let i=0;i<5;i++){
                setcount(precount => precount+1)
            }
    }
    return (
        <div>
            <button onClick={()=>setcount(initialcount)}>reset</button>
            <button onClick={()=>setcount(precount=>precount+1)}>increment</button>
            <button onClick={()=>setcount(precount => precount-1)}>decrement</button>
            <button onClick={incrementfive}>incrementfive</button>

            <h1>count {count}</h1>
        </div>
    )
}

export default Hoockscountertwo
