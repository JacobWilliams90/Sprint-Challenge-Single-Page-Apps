import React from "react";
import styled from 'styled-components'

const Div = styled.div`
  border: 1px solid black;
  width: 275px;
  margin: 2px;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
`

export default function EpisodeCard(props) {
  return (
    <Div className='epicard'>
      <h2>{props.name}</h2>
      <p>Air Date: {props.air_date}</p>
      <p>Episode: {props.episode}</p>
    </Div>
  );
}
