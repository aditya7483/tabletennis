import React from 'react'
import Coach from './pics/tt-coach.jpg'

export default function About() {
  return (
    <div className='my-3' id='about'>
        <h1 className='mb-5 myhead-3 head-font text-center fw-bold'>ABOUT</h1>
        <div id='about-box' className='container d-flex flex-row p-0'>
        <img src={Coach} alt='..' className='coach-pic'/>
        <div  className='py-2 px-1 d-flex flex-column align-items-center'>
            <h2 className='text-center my-2'>DANIEL NARODITSKY</h2>
            <p className='text-center my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos reprehenderit tempore eos, quo eligendi, eaque blanditiis minima pariatur consequatur, molestias exercitationem sunt accusantium porro. Aliquid veritatis doloremque fugit excepturi consequatur nesciunt nihil! Quam accusantium ad libero maiores tenetur pariatur illo incidunt! Ratione molestias voluptate nisi aperiam iste commodi incidunt!</p>
            <div>
            <i className="fa-brands fa-facebook social"></i>
            <i className="fa-brands fa-twitter social"></i>
            <i className="fa-brands fa-google-plus-g social"></i>
            <i className="fa-brands fa-instagram social"></i>
            </div>
        </div>
        </div>
        <div id="dummy-div-1">

        </div>
        <div id="dummy-div-2">

        </div>


    </div>
  )
}
