import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { isUserLoggedIn } from "../utils/session";

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg my-nav-bar mb-2">
        <a className="navbar-brand p-3 fs-2" href="/home">
          Hobb.it
        </a>
        <button
          className="navbar-toggler m-3"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isOpen ? "show" : ""} collapse navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto my-custom-center">
            <li className="nav-item active fs-4">
              <Link to="/" className="btn btn-warning nav-link" onClick={handleNavItemClick}>
                Home
              </Link>
            </li>
            {!isUserLoggedIn() && (
              <li
                className="nav-item fs-4"
              >
                <Link
                  to="/login"
                  className="btn btn-warning nav-link"
                  onClick={handleNavItemClick}
                >
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn() && (
              <>
                <li className="nav-item fs-4">
                  <Link
                    to="/dashboard"
                    className="btn btn-warning nav-link"
                    onClick={handleNavItemClick}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item fs-4">
                  <Link
                    to="/profile"
                    className="btn btn-warning nav-link"
                    onClick={handleNavItemClick}
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <LogoutButton className="btn btn-outline-danger m-2 fs-4" />
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
