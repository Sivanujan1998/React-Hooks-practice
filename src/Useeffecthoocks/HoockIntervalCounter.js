import React,{useEffect,useState} from 'react'

function HoockIntervalCounter() {
    const[count,setcount]=useState(0)
    const tick = ()=>{
        setcount(prevCount=>prevCount+1)
    }
    useEffect(()=>{
       
        const interval = setInterval(tick,100)
        return()=>{
clearInterval(interval)
        }
    },[])   // if yo want add dependency count in the array you can


  /*  useEffect(()=>{
        function doSomething(){
            console.log(someProp)
        }
        doSomething()
        const interval = setInterval(tick,1000)
        return()=>{
clearInterval(interval)
        }
    },[someProp])  */ //another method

    return (
        <div>
        {count}
        </div>
    )
}

export default HoockIntervalCounter
