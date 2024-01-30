import React, { Component } from 'react'

export default class Course extends Component {
    constructor(){
        super()
       // this.age=10;
        this.state={
          count:0,
        }

    }
    handleIncrement=()=>{
      this.setState({count:this.state.count+1})
    }
  render() {
    return (
    <div>
       {/* {this.age}
       <h1>{this.state.count}</h1> */}
       <button onClick={this.handleIncrement}>Increment</button>
       {/* onclick=()=>{this.handleIncrement(arguments)} */}
        <h1>course</h1>
        <h1>this.props.name</h1>
        <h1>this.props.salary</h1>
        <ul>{this.props.skills.map((item,index)=><li>{item}</li>)}</ul>
    </div>
    )
  }
}
