import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "./slideshow";
import Star from "./star";
import Collapse from "./collapse";
import Data from "../fixture/logements.json"

const FicheLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState();

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const logementData = Data.find((item) => item.id === id);
        setLogement(logementData);
        console.log(setLogement(logementData));
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchLogement();
  }, [id]);

  return (
    <article className="housingDetailComponent">
      <Slideshow images={logement?.pictures} />
      <h1>{logement?.title}</h1>
      <p>{logement?.location}</p>
      <ul className="tags">
        {logement?.tags.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="ownerInfo">
        <div>
          <Star rating={logement?.rating} />
        </div>
        <div className="ownerProfile">
          <p>{logement?.host.name}</p>
          <img src={logement?.host.picture} alt="profil du propriétaire" />
        </div>
      </div>
      <div className="collapse">
        <Collapse title="Description" className="collapse">
          <p>{logement?.description}</p>
        </Collapse>
        <Collapse title="Equipements" className="collapse">
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
