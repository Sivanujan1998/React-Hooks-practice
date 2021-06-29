import React from 'react'
import useCounter from './Hooks/useCounter'

function Countertwoo() {
    const[count,increment,decrement,reset]=useCounter(10,10)
    return (
        <div>
            <h1>Count - {count} </h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Countertwoo
