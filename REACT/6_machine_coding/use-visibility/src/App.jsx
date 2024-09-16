import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useVisibility from './useVisibility'
import Modal from './Components/Modal'

function App() {
  const { isVisible, show, hide, toggle } = useVisibility(false);

  return (
    <>
      <div className="App">
        <h1>Custom Hook Example</h1>
        <button onClick={show}>Show</button>
        <button onClick={toggle}>Toggle</button>
        <Modal isVisible={isVisible} hide={hide}></Modal>
      </div>
    </>
  )
}

export default App
