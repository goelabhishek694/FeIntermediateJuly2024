import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Homepage from './Components/Homepage';
// import Aboutpage from './Components/Aboutpage';
// import ContactPage from './Components/ContactPage';
import { useEffect, useState , lazy , Suspense} from 'react';

const Homepage = lazy(() => import('./Components/Homepage'));
const Aboutpage = lazy(() => import('./Components/Aboutpage'));
const ContactPage = lazy(() => import('./Components/ContactPage'));

function App() {
  // const [Homepage, setHomepage] =  useState(null);
  // const [Aboutpage, setAboutpage] =  useState(null);
  // const [ContactPage, setContactPage] =  useState(null);

  return (
    <>
    <Navbar 
    // setHomepage={setHomepage} 
    // setAboutpage={setAboutpage} 
    // setContactPage={setContactPage}
    ></Navbar>
      {/* <Routes>
        <Route path="/" element={Homepage ? <Homepage/> : <div>Loading....</div>}/>
        <Route path="/about" element={Aboutpage ? <Aboutpage/> : <div>Loading....</div>}/>
        <Route path="/contact" element={ContactPage ? <ContactPage/> : <div>Loading....</div>}/>
      </Routes> */}

      {/* lazy loading and suspense */}
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={ <Homepage/> }/>
          <Route path="/about" element={ <Aboutpage/> }/>
          <Route path="/contact" element={ <ContactPage/> }/>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
