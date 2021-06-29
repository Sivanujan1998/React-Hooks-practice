import React,{useReducer} from 'react'
const initialvalue={
    firstcount:0,
    secondcount:100
}
const reducer=(state,action)=>{
    switch(action.type){
            case "increaseone":
            return {...state,firstcount:state.firstcount+action.value}
            case "Decreaseone":
            return {...state,firstcount:state.firstcount-action.value}
            case "increaseten":
            return {...state,secondcount:state.secondcount+action.value}
            case "Decreaseten":
            return {...state,secondcount:state.secondcount-action.value}

            case "reset":
            return initialvalue
            
        default:
            return state
    }
}
function Countertwo() {
    const[count,dispatch]=useReducer(reducer,initialvalue)
    return (
        <div>
            <h2> 1<sup>st</sup> counter:- {count.firstcount}  </h2>
            <h1> 2<sup>nd</sup> counter:- {count.secondcount} </h1>

            <button onClick={()=>dispatch({type:"increaseone",value:1 })}> Increase by one </button>
            <button onClick={()=>dispatch({type:"Decreaseone",value:1 })}> Decrease by one </button>
 <br/>
            <button onClick={()=>dispatch({type:"increaseten",value:10 })}> Increase by ten </button>
            <button onClick={()=>dispatch({type:"Decreaseten",value:10 })}> Decrease by ten </button>
 <br/>        
            <button onClick={()=>dispatch({type:"reset" })}> Reset </button>
        </div>
    )
}

export default Countertwo
