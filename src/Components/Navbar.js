import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme={`${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                // style={{
                //   backgroundColor: props.mode === "dark" ? "white" : "black",
                //   color: props.mode === "dark" ? "black" : "white",
                // }}
              />
              <button
                className={`btn btn-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                type="submit"
              >
                Search
              </button>
              {/* <button className={`btn btn-${props.mode}`} type="submit">Search</button> */}
            </form>
            <div
              className={`form-check form-switch mx-3 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.togglemode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label mx-2 mt-1 fw-bold"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light" ? "Dark" : "Light"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  home: "Set Home Here",
  about: "Set Aboout Here",
};
