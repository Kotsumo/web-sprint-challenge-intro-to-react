import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/1')
    .then(res => setCharacter(res.data))
    .catch(err => console.log(err));
  }, []);
  
  //console.log(character);
  return (
    <div className="App">
      <StyledApp>
      <h1 className="Header">Characters</h1>
      <p>
        Character: {character.name}
      </p>
      <p>
      Year of Birth: {character.birth_year}
      </p>
      </StyledApp>
    </div>
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

export default App;
