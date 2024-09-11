import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Navbar(
    // {setHomepage, setAboutpage, setContactPage}
) {
    
    // useEffect(() => {
    //     import("./Homepage").then((module) => setHomepage(() => module.default));
    //   }, [])

    // const loadHomepage = () => {
    //     import("./Homepage").then((module) => setHomepage(() => module.default));
    //   }
    
    //   const loadAboutpage = () => {
    //     import("./Aboutpage").then((module) => setAboutpage(() => module.default));
    //   }
    
    //   const loadContactPage = () => {
    //     import("./ContactPage").then((module) => setContactPage(() => module.default));
    //   }
  return (
    <nav>
        {/* <ul>
            <li>
            <Link to="/" onClick={loadHomepage}>Home</Link>
            </li>
            <li>
            <Link to="/about" onClick={loadAboutpage}>About</Link>
            </li>
            <li>
            <Link to="/contact" onClick={loadContactPage}>Contact us</Link>
            </li>
        </ul> */}
         <ul>
            <li>
            <Link to="/" >Home</Link>
            </li>
            <li>
            <Link to="/about" >About</Link>
            </li>
            <li>
            <Link to="/contact" >Contact us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar