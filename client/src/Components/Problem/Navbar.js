import React, { useState } from "react";
import logo from "../static/logo.png";
import "./Navbar.css";

function Navbar() {
  const [currentPage, setCurrentPage] = useState("home");

  const setPage = (e) => {
    document.getElementById(currentPage).className = "item";
    document.getElementById(e).className = "active item";
    setCurrentPage(e);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="ui secondary pointing menu" id="navbar">
        <div className="left menu">
          <div className="item">
            <img src={logo} alt="logo"></img>
            DirtyBits
          </div>
        </div>
        <div className="active item" id="home">
          <button onClick={() => setPage("home")}>Home</button>
        </div>
        <div className="item" id="compete">
          <button onClick={() => setPage("compete")}>Compete</button>
        </div>
        <div className="item" id="practice">
          <button onClick={() => setPage("practice")}>Practice</button>
        </div>
        <div className="item" id="blogs">
          <button onClick={() => setPage("blogs")}>Blogs</button>
        </div>
        <div className="right item">
          <div className="ui search">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search ..."
              ></input>
              <i className="search icon"></i>
            </div>
          </div>
        </div>
        <div className="item right menu" style={{ paddingRight: "10px" }}>
          <div className="ui simple dropdown">
            <img className="ui avatar image" src={logo} alt="logo"></img>
            Himanshu Dhiman
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="active item">Profile</div>
              <div className="item">Edit</div>
              <div className="item">Settings</div>
              <div className="item">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
