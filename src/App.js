import React from 'react'
import './App.scss'
import './Base.scss'
import QuadrantZone from './components/QuadrantZone/QuadrantZone'
import DebugPanel from './components/DebugPanel/DebugPanel'
import MasterDeck from './components/MasterDeck/MasterDeck'
import gameSettings from './gameSettings'
import generateDeck from './helpers/generate-deck'
import { onEvent, triggerEvent } from './helpers/events'

export default class App extends React.Component {

  constructor() {
    super()

    this.bindEvents()

    // Setup
    const { players, deck } = gameSettings
    this.state = {
      activePlayerTurn: 0,
      players,
      masterDeck: generateDeck(deck.ingredients)
    }
  }

  bindEvents() {
    onEvent('Card/clicked', () => {
      const { players } = this.state

      players[0].cards.push( this.retrieveCardFromMasterDeck() )
      this.setState({
        players,
        masterDeck: this.state.masterDeck
      })
    })
  }

  retrieveCardFromMasterDeck() {
    const pickedUpCard = this.state.masterDeck[0]
    this.state.masterDeck.shift()
    return pickedUpCard
  }

  render() {
    return (
      <>
      {
        this.state.players.map((player, id) => {
          return (<QuadrantZone key={id} id={id} name={player.name} cards={player.cards} active={this.state.activePlayerTurn === id} />)
        })
      }
      <MasterDeck cards={this.state.masterDeck} />
      <DebugPanel content={ JSON.stringify( this.state , null, 2) } />
      </>
    )
  }
}
