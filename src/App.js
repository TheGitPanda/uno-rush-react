import React from 'react';
import GameBoard from './components/GameBoard/GameBoard'
import gameSettings from './gameSettings'
import generateDeck from './helpers/generate-deck'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.settings = gameSettings
  }

  render () {
    return (
      <GameBoard deck={ generateDeck(gameSettings.deck.ingredients) } />
    );
  }
}
