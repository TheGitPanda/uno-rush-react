import React from 'react'
import './Deck.scss'
import Card from './Card'
import './Card.scss'

export default class Deck extends React.Component {
  render() {
    return (
      <div className="deck">
        <div className="deck__rotator">
          <div className="deck__container">
          <Card />
          <Card />
          <Card />
          </div>
        </div>
      </div>
    );
  }
}
