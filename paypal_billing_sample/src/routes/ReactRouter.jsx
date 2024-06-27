import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import App from '../App'
export const ReactRouter = () => {
  return (
    <>
    <nav>
    <ul>
    <li>
        <Link to="/home">Home</Link>
    </li>
    <li>
        <Link to="/about">About</Link>
    </li>
    <li>
        <Link to="/contact">Contact</Link>
    </li>
    <li>
    <Link to="/app">App</Link>
    </li>
    </ul>
</nav>
    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />    
    <Route path="/app" element={<App/>} />    
    </Routes>

    </>
        

  )
}
