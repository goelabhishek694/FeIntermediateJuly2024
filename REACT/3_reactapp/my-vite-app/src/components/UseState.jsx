import { useState } from "react";
import Child from "./Child";
function UseState() {
  const [count, setCount] = useState(0);
  // const arr = useState(0);
  // const count=arr[0];
  // const setCount=arr[1];

    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1);
    }

  return (
    <>
      <h1>Counter App</h1>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <Child count={count}></Child>
    </>
  );
}

export default UseState;
