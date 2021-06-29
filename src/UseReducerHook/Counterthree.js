import React ,{useReducer}from 'react'
const initialvalue=0
const reduce = (state,action) =>{
    switch(action.type){
    case "increase":
        return state + action.value
        case "Decrease":
        return state - action.value
        case "reset":
        return initialvalue
        
    default:
        return state
}
}
function Counterthree() {
    const [countone,dispatchone]=useReducer(reduce,initialvalue)
    const [counttwo,dispatchtwo]=useReducer(reduce,initialvalue)

    return (
        <div>
            <h2> 1<sup>st</sup> counter:- {countone}  </h2>
            <h1> 2<sup>nd</sup> counter:- {counttwo} </h1>

            <button onClick={()=>dispatchone({type:"increase",value:1 })}> Increase by one </button>
            <button onClick={()=>dispatchone({type:"Decrease",value:1 })}> Decrease by one </button>
            <button onClick={()=>dispatchone({type:"reset"})}> Reset </button>
 <br/>
            <button onClick={()=>dispatchtwo({type:"increase",value:2 })}> Increase by two </button>
            <button onClick={()=>dispatchtwo({type:"Decrease",value:2 })}> Decrease by two </button>
            <button onClick={()=>dispatchtwo({type:"reset"})}> Reset </button>
 <br/>        
            
       
        </div>
    )
}

export default Counterthree
