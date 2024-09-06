import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Provider} from "react-redux";
import store from './redux/store';
import CounterRedux from './components/reduxComponents/CounterRedux';
import TodoRedux from './components/reduxComponents/TodoRedux';
import UserRedux from './components/reduxComponents/UserRedux';

function App() {
  const [count, setCount] = useState(0)

  return (

      // <CounterRedux></CounterRedux>
      // <TodoRedux></TodoRedux>
      <UserRedux></UserRedux>
  
  )
}

export default App
