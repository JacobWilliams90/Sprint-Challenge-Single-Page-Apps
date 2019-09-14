import React from "react";
import styled from 'styled-components'

const Div = styled.div`
    border: 1px solid black;
    margin: 2px;
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
`

const Img = styled.img`
  border-radius: 10%;
`

export default function CharacterCard(props) {
  return (
    <Div className='charcard'>
      <Img src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.species}</p>
      <p>{props.gender}</p>
      <p>Status: {props.status}</p>
    </Div>
  );
}
