import React,{useState,useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'
function Parentcomponent() {
    const [age,setage]=useState(25)
    const[salary,setsalary]=useState(50000)

    const incremetage=useCallback(()=>{
        setage(age+1)
    },[age])


    const incremetsalary=useCallback(()=>{
        setsalary(salary+1000)
            },[salary])

    return (
        <div>
            <Title/>
            <Count text="Age" count={age} />
            <Button handleClick={incremetage}>Increment Age </Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incremetsalary}>Increment Salary </Button>
        </div>
    )
}

export default Parentcomponent
