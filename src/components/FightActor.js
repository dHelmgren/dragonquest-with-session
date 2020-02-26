import React, { Component } from 'react';

class FightActor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      hpMax: props.hp,
      curHP: props.hp,
      mpMax: props.mp,
      curMP: props.mp,
      atk: props.atk,
      defn: props.defn,
      agi: props.agi
    }
  }


}

export default FightActor