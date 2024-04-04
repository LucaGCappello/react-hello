import React from "react";

const NavBar = () => {
    return (
         <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ color: 'white' }} >Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto "  >
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"style={{ color: 'white' }}>About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"style={{ color: 'white' }} >Service</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true" style={{ color: 'white' }}>Contact</a>
                    </li>
                </ul>
                </div>
            </div>
         </nav>
    );
}

export default NavBar
