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
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      console.log(res.data)
      setCharacter(res.data.character)
    })
    .catch(err => console.log(err));
  }, []);
  
  //console.log(character);
  return (
    <div className="App">
      <StyledApp>
      <h1 className="Header">Characters</h1>
      <p>
        Character: {character}
      </p>
      </StyledApp>
    </div>
  );
}

const StyledApp = styled.div`


`

export default App;
