import React from 'react'
import './PlayerDeck.scss'
import Card from '../Card/Card'

export default class PlayerDeck extends React.Component {
  render() {
    return (
      <div className="playerDeck">
        <div className="playerDeck__rotator">
          <div className="playerDeck__container">
          <Card />
          <Card />
          <Card />
          </div>
        </div>
      </div>
    );
  }
}
