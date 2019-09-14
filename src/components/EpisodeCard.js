import React from "react";

export default function EpisodeCard(props) {
    return (
    <div>
      <h2>{props.name}</h2>
      <p>Air Date: {props.air_date}</p>
      <p>Episode: {props.episode}</p>
    </div>
    );
  }
  