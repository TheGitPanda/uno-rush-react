import React from 'react'
import './Deck.scss'
import Card from './Card'
import './Card.scss'

export default class Deck extends React.Component {
  render() {
    return (
      <div className="deck">
        <div class="deck__rotator">
          <div class="deck__container">
          <Card />
          <Card />
          <Card />
          </div>
        </div>
      </div>
    );
  }
}
