import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand mx-3" to="/">Pocket Storage</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className={`nav-link ${location.pathname === '/notes' ? 'active' : ''}`} to="/notes">Notes</Link >
                        </li>
                        <li className="nav-item mx-2">
                            <Link className={`nav-link ${location.pathname === '/galary' ? 'active' : ''}`} to="/galary">Gallery</Link >
                        </li>
                        <li className="nav-item mx-2">
                            <Link className={`nav-link ${location.pathname === '/doc' ? 'active' : ''}`} to="/doc">Documents</Link >
                        </li>
                        <li className="nav-item mx-2">
                            <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link >
                        </li>
                    </ul>

                    {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                        <Link to="/login" class="btn btn-info mx-3">Login</Link>
                        <Link to="/signup" class="btn btn-info">Signup</Link>
                    </form> : <button onClick={handleLogout} class="btn btn-info">Logout</button>}

                </div>
            </div>
        </nav>
    )
}

export default Navbar
