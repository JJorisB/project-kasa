import React from "react";
import { useParams, Navigate } from "react-router-dom";
import dataLogements from "../data/logements";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Collapse from "../components/Collapse.jsx";
import Carrousel from "../components/Carrousel.jsx";
import "./Logement.css";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import Rate from "../components/Rate.jsx";

const Logement = () => {
  const { id } = useParams();

  const logement = dataLogements.find((dataLogement) => dataLogement.id === id);

  if (!logement) {
    return <Navigate to="/ErrorPage" />;
  }

  return (
    <div>
      <Header />
      <Carrousel slides={logement.pictures} />
      <div className="infos-logement-container">
        <div className="title-and-location">
          <h2 className="title">{logement.title}</h2>
          <h3 className="location">{logement.location}</h3>
        </div>
        <div className="host-and-picture">
          <p className="host-name">{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt="photo de l'hôte"
            className="host-picture"
          />
        </div>
        <div className="tags-and-rating">
          <div className="tags-container">
            {logement.tags &&
              logement.tags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                </div>
              ))}
          </div>
          <div className="rating-container">
            <Rate rating={parseInt(logement.rating)} />
          </div>
        </div>
        <div className="collapses-logement">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Logement;
