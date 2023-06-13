import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FicheLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState();

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch("../../data/logements.json");
        const jsonData = await response.json();
        const logementData = jsonData.find((item) => item.id === id);
        setLogement(logementData);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
};

fetchLogement();
}, [id]);


  return (
    <div>
      <img src={logement?.cover} alt={logement?.title} />
      <h2>{logement?.title}</h2>
      <p>Location: {logement?.location}</p>
      <p>Description: {logement?.description}</p>
      <p>Rating: {logement?.rating}</p>
      <p>Equipments: {logement?.equipments.map((item, i)=>(
        item[i]
      ))}</p>
      {/* <p>Pictures: {logement?.pictures}</p> */}
      <p>Host: {logement?.host.name}</p>
      <img src={logement?.host.picture} alt="photo du propriétaire" />
      <p>Tags: {logement?.tags.map((item, i)=>(
        item[i]
      ))}</p>
    </div>
  );
};

export default FicheLogement;