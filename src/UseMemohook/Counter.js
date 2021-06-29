import React,{useState,useMemo} from 'react'

function Counter() {
    const [counterone,setincrementone]=useState(0)
    const [countertwo,setincrementtwo]=useState(0)
    
    const incrementone=()=>{
            setincrementone(counterone+1)
    }
    const incrementtwo=()=>{
        setincrementtwo(countertwo+1)
}

const isEven =useMemo(()=>{
    let i=0
    while(i<2000000000) i++
    return counterone %2===0
},[counterone])
    return (<div>
        <div>
            <button onClick={incrementone}> Increment one- {counterone}</button>
            <span>{isEven?'Even':'odd'}</span>
        </div>
         <div>
         <button onClick={incrementtwo}> Increment one- {countertwo}</button>
     </div>
     </div>
    )
}

export default Counter
