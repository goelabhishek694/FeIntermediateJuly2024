import React, { useEffect, useState } from 'react'
import {Route, Routes, useParams, Link, Outlet, Navigate} from "react-router-dom"
function ReactRouterDOM() {
  return (
    <>
        <div>Navbar</div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}>
                {/* subrouting */}
                <Route path='company' element={<Company></Company>}></Route>
                <Route path='ceo' element={<Ceo></Ceo>}></Route>
            </Route>
            {/* dynamic routing */}
            <Route path="/user/:id/:name" element={<User></User>}></Route>
            {/* redirect to another path  */}
            <Route path='/home' element={<Navigate to="/"></Navigate>}></Route>
            {/* default routing */}
            {/* if none of the above routes match then this page is goung to be displayed */}
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </>
    
  )
}

function Home(){
    return(
        <>
            <div>Home Page</div>
            <h1>Our company is the best</h1>
        </>
    )
}

function About(){
    return(
        <>
            <div>About Page</div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id distinctio illo voluptatum sapiente, vero sed minus quia necessitatibus neque provident quae ea tempore dolores fuga itaque possimus deserunt cumque soluta.</h1>
            <Outlet></Outlet>
        </>
    )
}

function Company(){
    return(
        <>
            <h2>We never layoff</h2>
            <Outlet></Outlet>
        </>
    )
}

function Ceo(){
    return(
        <>
        <h2>Very good, best guy , best ceo</h2>
        <Outlet></Outlet>
        </>
    )
}

function User(){
    const [users,setUsers] = useState(null);
    const {id,name} = useParams();
    useEffect(() => {
        const fetchData = async function () {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
          );
          const result = await response.json();
          setUsers(result);
          console.log(name);
        };
        fetchData();
      }, []);

      return (
        <>
        {
            users == null ? (<h1>Loading ....</h1>) :(
            <>
                <div>I am User {id}</div>
                <li>{users.name}</li>
                <li>{users.email}</li>
            </>)
        }
        </>
      )
}


function PageNotFound(){
    return(
        <div>
            <h1>Oops!! Page not found </h1>
        </div>
    )
}


// No Page Reloads: Link automatically handles navigation internally by updating the React component state and the browser's history. This avoids reloading the entire application and losing state.
// Performance: Maintains the performance benefits of a SPA by only re-rendering the components that need to change rather than the entire page.
// Synchronization with Router: It integrates seamlessly with the React Router setup, ensuring that route changes are in sync with the application's state and the URL.


// Following are features of Tailwind CSS:

// Utility-First Approach: Tailwind CSS adopts a utility-first approach, offering a vast collection of small, single-purpose utility classes that can be combined to create complex designs and layouts. This approach promotes code reusability and rapid development.
// Customizable and Configurable: Tailwind is highly customizable through a configuration file, allowing developers to tailor the framework to match their project's specific design requirements. You can customize everything from colors and spacing to typography and breakpoints.
// Responsive Design Made Easy: Creating responsive web designs is simplified with Tailwind CSS. It provides responsive variants of utility classes, enabling developers to adapt the layout and styling of their websites for various screen sizes and devices effortlessly.
// Performance Optimization: Tailwind CSS is designed with performance in mind. It generates optimized CSS files by purging unused classes, resulting in smaller file sizes and faster loading times for web pages.
// Active Community and Ecosystem: Tailwind CSS has a thriving community of developers who contribute to its growth and share resources. Additionally, there are numerous plugins and extensions available that enhance Tailwind's capabilities, making it suitable for a wide range of web development projects.


export default ReactRouterDOM