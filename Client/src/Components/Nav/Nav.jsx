import React from 'react'
import "./Nav.css"

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg pt-4">
                <div class="container">
                    <a class="navbar-brand text-white" href="#">ElevateDaily.</a>
                    <button class="navbar-toggler outline-none shadow-none primary-red border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon primary-red border-0 outline-none "></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link  text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white px-4" aria-current="page" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white px-4" aria-current="page" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white px-4" aria-current="page" href="#">Contact Us</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav