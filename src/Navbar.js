import React, { Component } from "react";
import tutor from "./assets/tutor-asium.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="topnav container-fluid">
          <div className="logo">
            <img src={tutor} alt="TUTOR-ASIUM copy.png" />
          </div>
          <a href="#logout" style={{ fontSize: "120%" }}>
            <i className="bi bi-power"></i>Logout
          </a>
          <a href="#profile" style={{ fontSize: "120%" }}>
            <i className="bi bi-person-fill "></i>Profile
          </a>

          <a href="#home" style={{ fontSize: "120%" }}>
            <i className="bi bi-house-fill"></i>Home
          </a>
          <form id="form" role="search">
            <div className="input-group">
              <input
                type="search"
                id="query"
                name="q"
                placeholder="Search for Categories ..."
                aria-label="Search through site content"
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-default btn-vlg btn-lg bi-search"
                  style={{ color: "white" }}
                  type="button"
                ></button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Navbar;
