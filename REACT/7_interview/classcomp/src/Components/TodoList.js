import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            todos:[],
            newTodo:''
        }
        console.log("Constructor: setting up initial state and bindings");   
    }

    componentDidMount(){
        console.log("Component did mount : fetching initial to-do items");
        //simulate data fetchign from api 
        setTimeout(()=>{
            this.setState({
                todos: ['Learn React','ReadJS']
            })
        },1000)
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component did update: checking if new to-do is added");
        if(prevState.todos !== this.state.todos){
            console.log("updated todos: ", this.state.todos); 
        }   
    }

    componentWillUnmount(){
        console.log("Component will unmount: cleaning up resources");
    }

    handleInputChange = (e) => {
        this.setState({newTodo: e.target.value})
    }

    handleAddTodo = () => {
        this.setState((prevState)=>({
            todos: [...prevState.todos, prevState.newTodo],
            newTodo: ""
        }));
    }

    // hw -> if we write a function , what is the effect . how to use setState 
    // handleAddTodo2 = function (){
    //   this.setState((prevState)=>({
    //       todos: [...prevState.todos, prevState.newTodo],
    //       newTodo: ""
    //   }));
    // }

  render() {
    console.log('Render: Rendering the to-do list.');
    
    return (
      <div>
        <h1>My To-Do List</h1>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add To-Do</button>
      </div>
    )
  }
}
