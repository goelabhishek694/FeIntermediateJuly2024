// import React from 'react'

function Child({count}) {
    const increment=()=>{
        count++;
    }
  return (
    <>
    <button onClick={increment}>+</button>
    <div>{count}</div>
    </>
  )
}

export default Child