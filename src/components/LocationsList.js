import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import Axios from "axios";

export default function LocationsList() {
  const [location, newLocation] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        newLocation(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="grid-view">
      {location.map(location => (
        <LocationCard
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          residents={location.residents.length}
        />
      ))}
    </div>
  );
}
