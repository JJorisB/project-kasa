import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={"/LOGO.png"} alt="logo" className="logo" />
      <div className={"nav-links"}>
        <Link to={"/"} className="links-path">
          Accueil
        </Link>
        <Link to={"/About"} className="links-path">
          À Propos
        </Link>
      </div>
    </div>
  );
};

export default Header;
