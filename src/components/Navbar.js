import React from 'react'
import Logo from './pics/logo.png'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid mynav-font">
                    <a class="navbar-brand" href="/">
                        <img src={Logo} alt="" style={{ width: '3rem', height: '3rem' }} />
                        <p className='d-inline fw-bold mx-2 lobster-font'>
                            TT-74
                        </p>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-md-auto">
                            <li class="nav-item mynav-txt mx-3">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item mynav-txt mx-3">
                                <a class="nav-link" href="/">About</a>
                            </li>
                            <li class="nav-item mynav-txt mx-3">
                                <a class="nav-link" href="/">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
