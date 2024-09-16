import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    increment = () => {
        this.setState((prevState)=>({
            count : prevState.count+1
        }))
    }

    decrement = () => {
        this.setState((prevState)=>({
            count : prevState.count-1
        }))
    }

  render() {
    return (
      <div>
        <h2>Hello, React {this.props.name}</h2>
        <button onClick={this.increment}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
