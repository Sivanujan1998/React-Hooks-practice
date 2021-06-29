import React,{useEffect,useRef,useState} from 'react'

function Hooktimer() {
    
    const[timer,setTimer]=useState(0)
    const timerref=useRef(null)
    useEffect(()=>{
         timerref.current=setInterval(() => {
            setTimer(prevtime => prevtime + 1)
        }, 1000);
        return()=>{
            clearInterval(timerref.current)
        }
    },[])
    return (
        <div>
            <h1>{timer}</h1>
            <button onClick={()=>clearInterval(timerref.current)}>stopTimer</button>
          
        </div>
    )
}

export default Hooktimer
