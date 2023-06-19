import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "./slideshow";
import Star from "./star";
import Collapse from "./collapse";
import Data from "../fixture/logements.json";

const FicheLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const logementData = Data.find((item) => item.id === id);
      if (!logementData) {
        return navigate("/404");
      }
      setLogement(logementData);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  }, [id, navigate]);

  return (
    <article className="housing-detail-component">
      <Slideshow images={logement?.pictures} />
      <div className="housing-owner-info">
        <div className="housing-info">
          <h1>{logement?.title}</h1>
          <h2>{logement?.location}</h2>
          <ul className="tags">
            {logement?.tags.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="owner-info">
          <div>
            <Star rating={logement?.rating} />
          </div>
          <div className="owner-profile">
            <p>{logement?.host.name}</p>
            <img src={logement?.host.picture} alt="profil du propriétaire" width={64} height={64}/>
          </div>
        </div>
      </div>
      <div className="collapse-housing-detail-component">
        <Collapse title="Description">
          <p>{logement?.description}</p>
        </Collapse>
        <Collapse title="Equipements">
          <ul>
            <li>{logement?.equipments[0]}</li>
            <li>{logement?.equipments[1]}</li>
            <li>{logement?.equipments[2]}</li>
            <li>{logement?.equipments[3]}</li>
            <li>{logement?.equipments[4]}</li>
          </ul>
        </Collapse>
      </div>
    </article>
  );
};

export default FicheLogement;
