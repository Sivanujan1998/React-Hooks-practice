import React, { Component } from 'react'

 class Classcounterone extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0,
              name:""
         }
     }
     componentDidMount()
     {
        document.title=`Clicked ${this.state.count} times`
     }
     componentDidUpdate(propState,prevState){
         if(this.state.count!==prevState.count){
         console.log("updated")
        document.title=`Clicked ${this.state.count} times`
         }
     }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}}/>
                <button onClick={()=>this.setState({count:this.state.count+1})}> click {this.state.count} times</button>
            </div>
        )
    }
}

export default Classcounterone
