import React, { useRef } from 'react'

function FocusInput() {
    //creates a ref object with current property initialized to null
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }


  return (
    <div>
        <input type='text' ref={inputRef} ></input>
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput
