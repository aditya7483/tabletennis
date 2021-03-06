import React from 'react'
import Login from './Login'
import Logo from './pics/logo.png'

export default function Navbar(props) {

    const handleLogout = ()=>{
        localStorage.removeItem('auth-token');
        window.location.reload();
    }

    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid mynav-font">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="" style={{ width: '3rem', height: '3rem',filter:'invert(100%)' }} />
                        <p className='d-inline fw-bold mx-2 lobster-font h3'>
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
                                <a className="nav-link" href="#contact">Contact Me</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {!props.logged?<button type="button" className="btn btn-outline-primary border-primary fw-bold border border-3" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                Login
                            </button>:
                            <button className='btn btn-outline-secondary' onClick={handleLogout}>Logout</button>
                            }
                        </form>
                            <Login/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
