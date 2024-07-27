import React from 'react'
import Dropdown from './Dropdown'
import './style/Nav.css'
import leflif from './image/leflif.png'

function Navigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#"><img src={leflif} alt="" width="120" height="30" class="d-inline-block align-text-top"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Donate us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Be a Pro-Donor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Top Contributer</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className='impo'>
                        <Dropdown />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation
