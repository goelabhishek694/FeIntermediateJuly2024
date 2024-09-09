import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleDecrement = ()=>{
        setCount(count-1)
    }
  return (
    <>
        <button onClick={handleIncrement}>+</button>
        <h2> Count is {count}</h2>
        <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default Counter