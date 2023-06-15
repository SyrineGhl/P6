import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Data from "../fixture/logements.json";

const LocationCard = () => {
  const [showMore, setShowMore] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    setDisplayedData(Data.slice(0, showMore ? Data.length : 6));
  }, [showMore]);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="home-container">
      <div className="card-container">
        {displayedData.map((item) => (
          <NavLink
            key={item?.id}
            to={`/fiche-logement/${item.id}`}
            className="card-link"
          >
            <div className="card">
              <div className="card-title">
                <h2>{item?.title}</h2>
              </div>
              <img src={item?.cover} alt={item?.title} />
            </div>
          </NavLink>
        ))}
      </div>
      {!showMore && Data.length > 6 && (
        <div className="button-container">
          <button onClick={handleShowMore}>Voir plus</button>
        </div>
      )}
    </div>
  );
};

export default LocationCard;
