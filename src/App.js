import React from 'react'
import './App.scss'
import './Base.scss'
import QuadrantZone from './components/QuadrantZone/QuadrantZone'
import DebugPanel from './components/DebugPanel/DebugPanel'
import MasterDeck from './components/MasterDeck/MasterDeck'
import gameSettings from './gameSettings'
import setupGameWithState from './setupGameWithState'
import { onEvent } from './helpers/events'

export default class App extends React.Component {

  constructor() {
    super()

    // Setup the game
    this.state = setupGameWithState(gameSettings)

    // Distribute cards, new game
    this.state.players.forEach((player, id) => {
      this.dealCardsToPlayer(id, this.state.game.startingCards)
    })

    this.createDeadlineAction(() => {
      this.setState({
        activePlayerTurn: 0
      })
    }, 2)

    // Events

    onEvent('Card/clicked', () => {
      this.state.players[0].cards.push( this.retrieveCardFromMasterDeck() )
      this.setStateDefaults()
    })

    onEvent('QuadrantZone/received-activity', () => {
      this.createDeadlineAction(() => {
        this.nextGo()
      }, this.state.game.timeToMakeMove)
    })

    onEvent('GameLogic/go', () => {
      this.nextGo()
    })
  }

  // Time
  createDeadlineAction(callback, durationSeconds) {
    clearTimeout(this.timer)
    this.timer = setTimeout(callback, durationSeconds * 1000)
  }

  // Moves
  nextGo() {
    const { game, activePlayerTurn } = this.state
    this.setState({
      activePlayerTurn: game.playDirection === 1 ? (activePlayerTurn < 3 ? activePlayerTurn + 1 : 0) : (activePlayerTurn > 0 ? activePlayerTurn - 1 : 3)
    })
  }

  // Card / Deal Handling

  dealCardsToPlayer(playerId, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.state.players[playerId].cards.push( this.retrieveCardFromMasterDeck() )
    }
  }

  retrieveCardFromMasterDeck() {
    const pickedUpCard = this.state.masterDeck[0]
    this.state.masterDeck.shift()
    return pickedUpCard
  }

  recycleCardToMasterDeck(card) {
    this.state.masterDeck.push(card)
    this.setStateDefaults()
  }

  setStateDefaults() {
    this.setState({
      players: this.state.players,
      masterDeck: this.state.masterDeck
    })
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
