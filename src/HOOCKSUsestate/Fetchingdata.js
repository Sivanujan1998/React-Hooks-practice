import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Fetchingdata() {
    const[loading,setLoading]= useState(true)
    const[error,seterror]= useState("")
    const[post,setpost]= useState({})

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>{
            setLoading(false)
            setpost(res.data)
            seterror("nothing")
        })
        .catch(err=>{
            setLoading(false)
            setpost({})
            seterror("some thing wrong here")
        })
    }, [])
    return (
        <div>
            {loading? 'Loading':post.body}

            <br/>
            {error? error:error}
        </div>
    )
}

export default Fetchingdata
