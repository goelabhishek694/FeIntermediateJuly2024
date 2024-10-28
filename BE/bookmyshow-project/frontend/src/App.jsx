import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useSelector } from "react-redux";
// import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
// import BookShow from "./pages/BookShow";
import SingleMovie from "./pages/SingleMovie";
import Partner from "./pages/Partner";

function App() {
  const { loading } = useSelector((state) => state.loaders);

  return (
    <div className="App">
      {loading && (
        <div className="loader-container">
          {" "}
          <div className="loader"> </div>{" "}
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/partner"
            element={
              <ProtectedRoute>
                <Partner />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <SingleMovie />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/book-show/:id"
            element={
              <ProtectedRoute>
                <BookShow />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
