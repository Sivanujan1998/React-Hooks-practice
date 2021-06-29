
import React,{useReducer} from 'react'
const initialstate=0
const reducer=(state,action)=>{
switch(action){
    case "increase":
    return state+1
    case "decrease":
    return state-1
    case "reset":
    return initialstate
    default:
        return state

}
}
function CounterOne() {
    const [count,dispatch]=useReducer(reducer,initialstate)
    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={()=>dispatch("increase")}>incraese</button>
            <button onClick={()=>dispatch("decrease")}>decrease</button>
            <button onClick={()=>dispatch("reset")}>reset</button>
            
        </div>
    )
}

export default CounterOne
//https://www.youtube.com/watch?v=HsUpFwDvneo