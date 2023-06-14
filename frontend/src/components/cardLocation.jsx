import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const LocationCard = () => {
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../data/logements.json");
        const jsonData = await response.json();
        setData(jsonData);
        setDisplayedData(jsonData.slice(0, 3));
      } catch (error) {
        console.log("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
    setDisplayedData(data);
  };

  return (
    <div>
      <div className="card-container">
        {displayedData.map((item) => (
          <NavLink key={item?.id} to={`/fiche-logement/${item.id}`} className="card-link" activeclassname="active">
            <div className="card">
              <div className="card-title">
              <h2>{item?.title}</h2>
              </div>
              <img src={item?.cover} alt={item?.title} />
            </div>
          </NavLink>
        ))}
      </div>
      {!showMore && data.length > 3 && (
          <div className="button-container">
        <button onClick={handleShowMore}>Voir plus</button>
      </div>
      )}
    </div>
  );
};

export default LocationCard;
