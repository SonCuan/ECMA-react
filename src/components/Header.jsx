import { Link } from "react-router-dom";
import * as React from "react";
import "../index.scss";


export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link a-hover" href="/Login">
                Login
              </a>
              <a className="nav-link a-hover" href="/About">
                About
              </a>
              <a className="nav-link a-hover" href="/Blog">
                Blog
              </a>
              <a className="nav-link a-hover" href="*">
                Back
              </a>
              <a className="nav-link a-hover" href="/Admin">
                Admin
              </a>
              <a className="nav-link a-hover" href="/Register">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
