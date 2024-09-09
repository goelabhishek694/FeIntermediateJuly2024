import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import WatchList from './Components/WatchList'
import {Routes,Route} from 'react-router-dom'
import Context from '../poc/Context'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/watchlist" element={<WatchList></WatchList>}></Route>
      </Routes>
      {/* <Context></Context> */}
    </>
  )
}

export default App
