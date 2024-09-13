import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stopwatch from './Components/Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stopwatch></Stopwatch>
    </>
  )
}

export default App
