import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext,Channelcontext} from '../../App'



function ComponentE() {
    const user= useContext(UserContext)
const course= useContext(Channelcontext)
    return (
        <div>
            <h1>My name is a {user} i am a {course}</h1>
        </div>
    )
}

export default ComponentE
