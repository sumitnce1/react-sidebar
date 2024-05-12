import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    if (toggle && nav && bodypd && headerpd) {
      nav.classList.toggle("showw");
      toggle.classList.toggle("bx-x");
      bodypd.classList.toggle("body-pd");
      headerpd.classList.toggle("body-pd");
    }
  };

  return (
    <div>
      <div>
      <header className="header bg-info" id="header">
    <div className="header_toggle">
      <i className="bx bx-menu laptop-menu-icon " onClick={() => { showNavbar("header-toggle", "nav-bar", "body-pd", "header") }} id="header-toggle"></i>
      <i className="bx bx-menu mobile-menu-icon" data-bs-toggle="offcanvas" data-bs-target="#demo"></i>
    </div>
    <div className="container-fluid d-flex justify-content-between align-items-center">
      <a className="navbar-brand" href="#">Navbar</a>
      <a className="profile ml-auto">
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" alt="avtar" style={{border: "1px solid white", borderRadius: "50%", height: "50px", width: "50px", cursor: 'pointer'}}/>
        {/* Add your profile content here */}
      </a>
    </div>
  </header>
        <div className="l-navbar" id="nav-bar">
          <nav className="nav">
            <div>
              <a href="/" className={`nav_logo ${location.pathname === "/" ? "active" : ""}`}>
                <i className="bx bx-layer nav_logo-icon"></i>
                <span className="nav_logo-name">Logo</span>
              </a>
              <div className="nav_list">
                <a href="/Home" className={`nav_link ${location.pathname === "/Home" ? "active" : ""}`}>
                  <i className="bx bx-grid-alt nav_icon"></i>
                  <span className="nav_name">Dashboard</span>
                </a>
                <a href="/User" className={`nav_link ${location.pathname === "/User" ? "active" : ""}`}>
                  <i className="bx bx-user nav_icon"></i>
                  <span className="nav_name">Users</span>
                </a>                    
                <a href="#" className="nav_link">
                  <i className="bx bx-message-square-detail nav_icon"></i>
                  <span className="nav_name">Messages</span>
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-bookmark nav_icon"></i>
                  <span className="nav_name">Bookmark</span>
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-folder nav_icon"></i>
                  <span className="nav_name">Files</span>
                </a>
                <a href="#" className="nav_link">
                  <i className="bx bx-bar-chart-alt-2 nav_icon"></i>
                  <span className="nav_name">Stats</span>
                </a>
              </div>
            </div>
            <a href="#" className="nav_link">
              <i className="bx bx-log-out nav_icon"></i>
              <span className="nav_name">SignOut</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
