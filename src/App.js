import React from 'react';
import './App.css';
import monsters from './data/monsters.json';
import characters from './data/player_characters.json';


function App () {
  let char = characters["Hero List"][0]
  let monst = monsters["Monster List"][0]
  return (
    <div className="App">
     {/* <Character />
     <Monster /> */}
    </div>
  );
}

export default App;