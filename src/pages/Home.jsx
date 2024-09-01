import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import dataLogements from "../data/logements";
import "./Home.css";
import Card from "../components/Card.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="title-container">
          <img
            src={"/Img-accueil.png"}
            alt="image en fond du titre"
            className="img-accueil"
          />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <div className="container">
        {dataLogements.map((dataLogement) => (
          <div key={dataLogement.id}>
            <Link to={`/logement/${dataLogement.id}`}>
              <Card image={dataLogement.cover} title={dataLogement.title} />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
