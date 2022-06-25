import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import GetQuestions from './components/GetQuestions'

export default function App() {

  const [logged, setLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchData = async()=>{
    try {
      let authToken = localStorage.getItem('auth-token')
      let res = await fetch('https://tt-74.herokuapp.com/api/auth/getuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': authToken
        }
      })
      let data = await res.json();
      setLogged(true)
      if (data.isAdmin) {
        setIsAdmin(true)
      }
      else setIsAdmin(false)
    } catch (err) {
      setIsAdmin(false)
      setLogged(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <Navbar logged={logged} />
      <Home />
      <About />
      <Contact/>
      {isAdmin&&<GetQuestions/>}
    </div>
  )
}

