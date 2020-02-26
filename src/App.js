import React from 'react';
import './App.css';
import Monster from './components/Monster'
import Character from './components/Character'
import monsters from './data/monsters.json';
import characters from './data/player_characters.json';


function App () {
  let char = characters["Hero List"][0]
  let monst = monsters["Monster List"][0]
  return (
    <div className="App">
     <Character hp={char.HP} mp={char.MP} name={char.Name}/>
     <Monster hp={monst.HP} mp={monst.MP} name={monst.name}/>
    </div>
  );
}

export default App;