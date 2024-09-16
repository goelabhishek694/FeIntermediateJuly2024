import React, { useState, useEffect } from "react";

function TodoListFunc() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    console.log("Component did mount : fetching initial to-do items");
    setTimeout(() => {
        setTodos(["Learn React", "ReadJS"])
      },1000);

    return () => {
      console.log("Component will unmount: cleaning up resources");
    };
  }, []);

  useEffect(() => {
    console.log("Component did update: checking if new to-do is added");
    console.log("updated todos: ", todos);
  }, [todos]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    let updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setNewTodo("");
  };
  console.log("Render: Rendering the to-do list.");

  return (
    <div>
      <h1>My To-Do List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add To-Do</button>
    </div>
  );
}

export default TodoListFunc;


// Differences and Comparison
// Feature	         Class Component	            Functional Component
// State Management	this.state and this.setState	useState
// Side Effects	Lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount)	useEffect
// Syntax	ES6 class syntax	Functions
// Event Handlers	Bound in constructor or using arrow functions	Directly defined within the component
// Component Structure	More verbose and involves more boilerplate code	More concise and less boilerplate

// Why Functional Components are Better
// Simplicity and Readability: Functional components are generally easier to read and write. They involve less boilerplate code and are more concise.

// Hooks: Hooks provide powerful features that are not available in class components, such as useState, useEffect, useContext, etc. They allow you to reuse stateful logic without changing your component hierarchy.

// Avoiding this Keyword: Functional components do not use the this keyword, which can be confusing and error-prone in class components.

// Better Performance: Functional components can be more performant because they are stateless by default. With hooks, you can manage state more efficiently.

// Encapsulation of Logic: Hooks allow you to encapsulate and reuse logic more easily. Custom hooks enable the extraction of complex logic into reusable functions.

// Conclusion
// Both class-based and functional components have their places in React development, but functional components with hooks offer a more modern, simpler, and powerful approach to building components. They improve code readability, make it easier to manage state and side effects, and avoid common pitfalls associated with class-based components