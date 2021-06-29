import React,{useState,useEffect} from 'react'

function Hooksmouse() {
    const[x,setx]=useState(0)
    const[y,sety]=useState(0)

const logMousePosition =e =>{
    console.log('mouse movement')
    setx(e.clientX)
    sety(e.clientY)
}

    useEffect(()=>{
        console.log('usereffect called')
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
            console.log("mouse move capture stopped")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    //empty array use to mention no element focus tio update

    return (
        <div>
            Hooks X-{x}     Y-{y}
        </div>
    )
}

export default Hooksmouse
