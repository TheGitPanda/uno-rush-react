import React from 'react';
import GameBoard from './components/GameBoard'
import gameSettings from './gameSettings'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.settings = gameSettings
  }

  render () {
    return (
      <GameBoard />
    );
  }
}
