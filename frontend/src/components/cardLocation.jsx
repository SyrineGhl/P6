import React, { useState, useEffect } from "react";

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
          <div key={item.id} className="card">
            <h2 className="card-title">{item.title}</h2>
            <img src={item.cover} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCard;
