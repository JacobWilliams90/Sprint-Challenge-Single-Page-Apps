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

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Div className='loccard'>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Residents: {residents}</p>
    </Div>
  );
}
