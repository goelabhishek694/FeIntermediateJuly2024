import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from "./pages/register";
import Home from "./pages/Home";
import Login from "./pages/login";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
