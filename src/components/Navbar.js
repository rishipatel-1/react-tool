import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e8c5c5"}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link text-dark m-2" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark m-2" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark m-2" href="/">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark m-2"  href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar;