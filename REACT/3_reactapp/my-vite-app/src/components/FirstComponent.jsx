// import React from 'react'
//props short for properties . used to share data between components . 
function FirstComponent({name}) {
  return (
    <>
        <div>FirstComponent</div>
        <h1>hello {name}</h1>
    </>
  )
}

export default FirstComponent