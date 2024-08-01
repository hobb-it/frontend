import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import isUserLoggedIn from "../utils/session";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand m-3" href="#">
          Hobb.it
        </a>
        <button
          className="navbar-toggler m-3"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isOpen ? "show" : ""} collapse navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" onClick={handleNavItemClick}>
                Home
              </Link>
            </li>
            {!isUserLoggedIn() && (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn() && (
              <>
                <li className="nav-item">
                  <Link
                    to="/dashboard"
                    className="nav-link"
                    onClick={handleNavItemClick}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/profile"
                    className="nav-link"
                    onClick={handleNavItemClick}
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <LogoutButton className="btn btn-outline-success my-2 my-sm-0" />
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