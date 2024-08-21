// import React from 'react'

function Button() {
    const handleClick=()=>{
        console.log("button clicked");
    }
  return (
    <button onClick={handleClick}>Click Me</button>
  )
}

export default Button