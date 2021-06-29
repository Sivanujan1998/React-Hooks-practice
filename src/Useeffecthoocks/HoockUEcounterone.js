import React,{useState,useEffect} from 'react'

function HoockUEcounterone() {
    const[count,setcount]=useState(0)
    const[name,setName] = useState('')

    useEffect(()=>{
       console.log("updated from hooks")
        document.title=`you clicked ${count} times`
    },[count])//it controll wwhich value updated in future
//it will run after the render method

    return (
        <div>
 <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
<button onClick={()=>setcount(count+1)}> Click {count} Times </button>
        </div>
    )
}

export default HoockUEcounterone
