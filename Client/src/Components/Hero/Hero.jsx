import React from 'react'
import Nav from '../Nav/Nav'
import "./Hero.css"

function Hero() {
    return (
        <div className='hero-section'>
        <Nav />
        <div className="container mt-5 pt-4">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-12 col-md-8 mt-5">
                    <h1 className='hero-heading'>
                        Explore Inspiring Stories and Successes in <span className='primary-red'>ElevateDaily</span>
                    </h1>
                    <p className='my-4 hero-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Magni doloribus consequuntur est assumenda earum exercitationem labore error optio.
                    </p>
                </div>
                <div className="col-12 mt-2">
                    <button className='btn btn-outline-danger py-2 px-5 rounded-5'>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero