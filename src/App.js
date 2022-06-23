import React from 'react'
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

