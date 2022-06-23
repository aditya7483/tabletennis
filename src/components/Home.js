import React from 'react'
import Logo from './pics/logo.png'

export default function Home() {
  return (
    <div className='d-flex justify-content-center' id='home' >
        <div className='align-self-center'>
          <img src={Logo} className="mylogo" alt="..." />
          <h3 className='myhead-1 text-center lobster-font'>TABLE TENNIS-74</h3>
          <h1 className='myhead-2 text-center my-3'>BRING OUT THE BEST IN YOU</h1>
          <button className='mybtn-1 my-3 head-font'>ENQUIRE</button>
        </div>
    </div>
  )
}
