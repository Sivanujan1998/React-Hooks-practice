import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialvalue={
    post:{},
    error:"",
    loading:true
}
const reducer=(state,action)=>{
switch(action.type){
    case "fetchsucess":
        return{
        loading:false,
        post:action.payload,
        error:""}
    case "fetcherror":
      return { loading:false,
        post:{},
        error:"something went error"
  } 
   default:
        return state
}
}

function Datafetchingtwo() {
    const [state,dispatch]=useReducer(reducer,initialvalue)

    useEffect(()=>{
axios("https://jsonplaceholder.typicode.com/posts/1")
.then(res=>{
    dispatch({type:'fetchsucess',payload:res.data})
})
.catch(err=>{
    dispatch({type:"fetcherror"})
})
    },[])

    return (
        <div>
            {
                state.loading?"loading":state.post.title
            }
              {
                state.error? state.error:""
            }
        </div>
    )
}

export default Datafetchingtwo
