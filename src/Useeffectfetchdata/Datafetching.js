import React, {useState,useEffect} from 'react'
import axios from 'axios'

function Datafetching() {
    const[post,setpost] = useState({})
    const[id,setid] = useState(1)
    const[idforbutton,setbuttonid]=useState(1)

    useEffect(()=>
    {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idforbutton}`)
        .then(res=>{
            console.log(res)
            setpost(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[idforbutton])
    return (<div>
        <input type="text" value={id} onChange={(e)=>setid(e.target.value)}/>
        <button type="button" onClick={()=>setbuttonid(id)}>fetch data</button>
        <h1>{post.id}</h1>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
        
        
        
        
        
        { /*
        <ul>
            {posts.map(post=>
                (<li key={post.id}>{post.title}</li>
            ))}
        </ul>*/}
        </div>
    )
}

export default Datafetching
