import React, { useState, useMemo } from 'react'
const generateLargeArray = () =>{
    const largeArrray = [];
    for(let i=0;i<1000000;i++){
        largeArrray.push(i);
    }
    return largeArrray;
}

const sumArray = (arr) => {
    console.log("Calculating sum ...");
    return arr.reduce(( acc, curr ) => acc + curr, 0)
} 

function UseMemo() {
    const [count, setCount] = useState(0);
    const largeArrray = useMemo(()=>generateLargeArray(),[]);
    const sum = useMemo(()=> sumArray(largeArrray), [largeArrray]);
  return (
    <div>
        <h1>Sum : {sum}</h1>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <p>Count: {count}</p>
    </div>
  )
}

export default UseMemo