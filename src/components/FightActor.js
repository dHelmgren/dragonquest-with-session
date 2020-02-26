import React, { Component } from 'react';

class FightActor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      HPMax: props.HP,
      CurHP: props.HP,
      MPMax: props.MP,
      CurMP: props.MP,
      Atk: props.atk,
      Defn: props.defn,
      Agi: props.agi
    }
  }

  
}