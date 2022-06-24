import React from 'react'
import Coach from './pics/tt-coach.jpg'

export default function About() {
  return (
    <div className='my-3 mb-5' id='about'>
      <h1 className='mb-5 myhead-3 head-font text-center fw-bold'>ABOUT</h1>
      <div id='about-box' className='container d-flex flex-row p-0 mb-5'>
        <img src={Coach} alt='..' className='coach-pic' />
        <div className='py-2 px-1 d-flex flex-column align-items-center'>
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

      <hr className=' myline'></hr>

      <h1 className='my-5 myhead-3 head-font text-center fw-bold'>ACHIEVEMENTS</h1>

      <div className='d-flex justify-content-md-around align-items-center'>
        <div className="card mycard-1" style={{ width: "18rem" }}>
          <div className="card-body">
            <i className=" card-title fa-solid fa-trophy social2"></i>
            <h3 className='my-4 text-center myhead-4'>3 TIMES STATE CHAMPION</h3>
          </div>
        </div>
        <div className="card mycard-1" style={{ width: "18rem" }}>
          <div className="card-body">
            <i className=" card-title fa-solid fa-table-tennis-paddle-ball social2"></i>
            <h3 className='my-4 text-center myhead-4'>COACHED 3 NATIONAL LEVEL PLAYERS</h3>
          </div>
        </div>
        <div className="card mycard-1" style={{ width: "18rem" }}>
          <div className="card-body">
            <i className=" card-title fa-solid fa-medal social2"></i>
            <h3 className='my-4 text-center myhead-4'>RECIEVED BEST PLAYER OF THE YEAR AWARD</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
