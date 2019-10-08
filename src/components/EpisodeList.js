import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList(props) {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        setEpisode(res.data.results);
      })

      .catch(err => console.log(err));
  }, []);

  return (
    <div className="grid-view">
      {episode.map(episode => (
        <EpisodeCard
          name={episode.name}
          episode={episode.episode}
          air_date={episode.air_date}
        />
      ))}
    </div>
  );
}
