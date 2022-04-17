import React, { Component } from "react";
import tutor from "./assets/tutor-asium.png";
import { Link, BrowserRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="topnav container-fluid">
          <div className="logo">
            <img src={tutor} alt="TUTOR-ASIUM copy.png" />
          </div>

          <Link to="/home" style={{ fontSize: "120%" }}>
            <i class="bi bi-house-door-fill"></i>
            Home
          </Link>

          <Link to="/" style={{ fontSize: "86%", paddingTop: "20px" }}>
            <i className="bi bi-person-fill "></i>
            Appointments
          </Link>
          <Link to="/Addtutor" style={{ fontSize: "120%" }}>
            <i className="bi bi-plus"></i>
            Add Tutor
          </Link>

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
