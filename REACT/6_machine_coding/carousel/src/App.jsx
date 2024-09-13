import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Caraousel from './Components/Caraousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Caraousel></Caraousel>
    </>
  )
}

export default App
