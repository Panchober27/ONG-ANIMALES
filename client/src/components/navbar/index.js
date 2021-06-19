import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <a className="navbar-brand" href="#">
            ONG ANIMALES🐱‍👤
          </a>
        </NavLink>
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
        <div
          className="collapse navbar-collapse dflex flex-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <a className="nav-link active">Nosotros</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/animals" style={{ textDecoration: "none" }}>
                <a className="nav-link active">Adopta</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/donations" style={{ textDecoration: "none" }}>
                <a className="nav-link active">Donaciones</a>
              </NavLink>
            </li>
            <li className="nav-item">
              {/* nav-link active */}
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <a className="btn btn-primary mx-2">INGRESO</a>
              </NavLink>
            </li>
            <li className="nav-item">
              {/* nav-link active */}
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                <a className="btn btn-success">REGISTRO</a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
