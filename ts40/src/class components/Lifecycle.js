import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            str : ''
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.count<=13){
            this.setState.str="Congratulations!"
            console.log(this.state.count)
            return true
        }
        return false
    }
  render() {
    return (
      <div>
        <p>Lifecycle</p>
      <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
    </div>
    )
  }
}
