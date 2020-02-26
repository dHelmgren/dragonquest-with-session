import React, { Component } from 'react';
import FightActor from './FightActor.js'

class Character extends FightActor {
  constructor(props){
    super(props)

    this.state = {
      res: props.res
    }
  }

  render(){

    return (
      <section className='character'>
        <div>
          Name: {this.state.name}
          HP: {this.state.curHP} / {this.state.mpMax}
          MP: {this.state.curMP} / {this.state.mpMax}
        </div>
      </section>
    );
  }
}