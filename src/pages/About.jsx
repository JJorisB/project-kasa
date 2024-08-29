import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Collapse from "../components/Collapse.jsx";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="title-about-container">
          <img
            src={"/Img-about.png"}
            alt="image en fond du la page 'à propos'"
            className="img-about"
          />
        </div>
      </div>
      <div className="collapse-container">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale.  Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers de sécurité domestique par nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
};
export default About;
