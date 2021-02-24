import React from 'react'
import CharacterItem from './CharacterItem'


// Write your Character component here
const Character = (props) => {
    console.log(props.character);
    return (
        <div className="App">

          <h1 className="Header">Characters</h1>
          
          {props.character.map(item => {

              return(
                  <CharacterItem key={item.id} character={item}/>
              );
          }
          )}
          {/* <p>
            Character: {character.name}
          </p>
          <p>
          Year of Birth: {character.birth_year}
          </p> */}
        </div>
    );
}

export default Character;