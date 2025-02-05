import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return <>

    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to={'/'}>
        <img src="../../../public/logo192.png" alt="" className="w-50" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active fw-bold text-white" aria-current="page" to={'/'}>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold text-white" aria-current="page" to={'about'}>ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold text-white" aria-current="page" to={'portfolio'}>PORTFOLIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold text-white" aria-current="page" to={'contact'}>CONTACT</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  </>
}

export default Navbar;
