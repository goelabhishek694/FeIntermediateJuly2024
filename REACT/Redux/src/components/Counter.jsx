import React, {useState} from 'react'

function Counter() {
// the following sections 
// 1. state management 
// 2. event handlers 
// 3. UI 
// Business Logic -> handleIncrement , handleDecrement
    const [count,setCount] = useState(0);
    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleDecrement = ()=>{
        setCount(count-1)
    }
  return (
    <>
        <button onClick={handleIncrement}>+</button>
        <div>{count}</div>
        <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default Counter