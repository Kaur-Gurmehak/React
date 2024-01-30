import React, { Component } from 'react'

export default class Assign extends Component {
    constructor(){
        super()
        this.state={
            name:"abc",
            flag:'true'
        }
    }
    handleChange=()=>{
        this.setState({flag:!this.state.flag})
    }
  render() {
    return (
      <div>
        {this.state.flag &&
        <h1>{this.state.name}</h1> }
        <button onClick={this.handleChange}>{this.state.flag?"hide":"show"}</button>
      </div>
    )
  }
}
