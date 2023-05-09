import React from "react";
import "./OsicLeftMenu.css";
import Menu from "./Menu.jsx";
import listmenu from "./ListMenu";
import { BiSearchAlt } from "react-icons/bi";

function OsicLeftMenu() {
  return (
    <div className="leftMenu">
      <div className="navbar">
        <img
          src={require("./images/logo.png")}
          alt="ini logo"
          className="logo"
        />
        <a href="/osic" className="navigation">
          Home
        </a>
        <a href="/aboutus" className="navigation">
          About Us
        </a>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search Song..." />
        <div className="searchIcon">
          <BiSearchAlt />
        </div>
      </div>
      <Menu title={"Menu"} list={listmenu} />
    </div>
  );
}

export default OsicLeftMenu;
