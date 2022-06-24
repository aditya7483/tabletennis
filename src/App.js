import React from 'react'
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

