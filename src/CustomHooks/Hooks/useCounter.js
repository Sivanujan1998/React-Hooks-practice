import {useState} from 'react'

function useCounter(initialvalue=0,value) {
    const[count,setCount]=useState(initialvalue)

    const incrment=()=>{
        setCount(pre=>pre +value)
    }
    const decrement=()=>{
        setCount(pre=>pre -value)
    }
    const reset=()=>{
        setCount(initialvalue)
    }
   return[count,incrment,decrement,reset]
}

export default useCounter
