import React from 'react'
import {UserContext,Channelcontext} from '../../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user=>
                    {
                        return(
                            <Channelcontext.Consumer>{
                                channel=>{
                                    return(<h1>Im {user} im a {channel}</h1>)
                                }   
                            }
                              
                            </Channelcontext.Consumer>
                        )
                    }
                }
                </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
