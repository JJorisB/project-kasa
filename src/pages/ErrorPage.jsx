import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="error-page-container">
        <img src="./404.png" alt="404" className="error-404" />
        <h3 className="error-message">
          Oups! La page que vous demandez n'existe pas.
        </h3>
        <Link to={"/"} className="home-link">
          Retourner sur la page d’accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
