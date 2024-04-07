import React from "react";
import LogoHeader from "../../favicons/logoHeader.png";
function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={LogoHeader} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fw-500  text-black" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-500  text-black" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link fw-500  dropdown-toggle text-black"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item text-black" href="#">
                      Service 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-black" href="#">
                      Service 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-black" href="#">
                      Service 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-500  text-black" href="#">
                  Case Study
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link bg-green fw-500 mr-0 btn text-white p-2 px-4"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
