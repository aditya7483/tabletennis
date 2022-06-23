import React from 'react'
import Logo from './pics/logo.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid mynav-font">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="" style={{ width: '3rem', height: '3rem' }} />
                        <p className='d-inline fw-bold mx-2 lobster-font'>
                            TT-74
                        </p>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-md-auto">
                            <li className="nav-item mynav-txt mx-3">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mynav-txt mx-3">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item mynav-txt mx-3">
                                <a className="nav-link" href="/">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
