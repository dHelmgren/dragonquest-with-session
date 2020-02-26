import React, { Component } from 'react';
import FightActor from './FightActor.js'

class Monster extends FightActor {

  render(){

    return (
      <section className='monster'>
        <div>
          Name: {this.state.name}
          HP: {this.state.curHP} / {this.state.mpMax}
        </div>
      </section>
    );
  }
}