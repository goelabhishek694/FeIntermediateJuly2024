import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusInput from './Components/FocusInput'
import Timer from './Components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FocusInput></FocusInput> */}
      <Timer></Timer>
    </>
  )
}

export default App
