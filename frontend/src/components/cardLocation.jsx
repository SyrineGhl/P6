import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const LocationCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../data/logements.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []);

  const displayedData = data.slice(0, 3);

  return (
    <div>
      <div className="card-container">
        {displayedData.map((item) => (
          <NavLink key={item?.id} to={`/fiche-logement/${item.id}`} className="card-link" activeclassname="active">
            <div className="card">
              <h2 className="card-title">{item?.title}</h2>
              <img src={item?.cover} alt={item?.title} />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LocationCard;
