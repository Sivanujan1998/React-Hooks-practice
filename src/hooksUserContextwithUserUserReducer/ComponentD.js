import React,{useContext} from 'react'
import { CounterContextforglobal } from '../App'


function ComponentD() {
    const CounterContext=useContext(CounterContextforglobal)
    return (
        <div style={{color:"blue"}}>
        ComponentD count - {CounterContext.count}
        <button onClick={()=>CounterContext.countchanger('increment')}>increase</button>
        <button onClick={()=>CounterContext.countchanger('decrement')}>decrease</button>
        <button onClick={()=>CounterContext.countchanger('reset')}>reset</button>
        </div>
    )
}

export default ComponentD
