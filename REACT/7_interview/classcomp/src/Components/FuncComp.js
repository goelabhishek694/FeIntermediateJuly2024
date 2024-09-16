import React, {useState} from 'react'

function FuncComp() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }
  return (
    <div>
      <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default FuncComp
