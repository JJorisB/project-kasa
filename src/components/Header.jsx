import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={"/LOGO.png"} alt="logo" className="logo" />
      <div className={"nav-links"}>
        <NavLink to={"/"} className="links-path">
          Accueil
        </NavLink>
        <NavLink to={"/About"} className="links-path">
          À Propos
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
