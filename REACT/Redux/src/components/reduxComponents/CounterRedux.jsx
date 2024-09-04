import React, {useState} from 'react'
import { useSelector } from 'react-redux'
function CounterRedux() {
    const count=useSelector((store)=> store.counterState.count);

    const handleIncrement = () => {
        console.log("increment will happen");
    }
    
    const handleDecrement = () => {
        console.log("decrement will happen");
    }

  return (
    <>
        <button onClick={handleIncrement}>+</button>
        <div>{count}</div>
        <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default CounterRedux