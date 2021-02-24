import React from "react"
import styled from "styled-components";


const CharacterItem = (props) => {
    return ( 
    <>
    <StyledApp>
        <p>Character: {props.character.name} </p>, 
        <p>Year of Birth: {props.character.birth_year} </p>
    </StyledApp>
    </>
    );
}

const StyledApp = styled.div`

p {
  color: white;
  display: inline-block;
  justify-content: center;
  padding: 10px;
  font-size: 32;
  font-weight: bold;
  text-shadow: 2px 2px black;
}
`

export default CharacterItem;