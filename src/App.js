import React from 'react'
// CSS
import './App.scss'
// Components
import Board from './components/Board/Board'
import Flower from './components/Flower/Flower'
import DebugPanel from './components/DebugPanel/DebugPanel'
import MasterDeck from './components/MasterDeck/MasterDeck'
import PileDeck from './components/PileDeck/PileDeck'
import PlayerDeck from './components/PlayerDeck/PlayerDeck'
// Helpers
import setupGameWithState from './helpers/setup-game-with-state'
import { onEvent, triggerEvent } from './helpers/event'
import { swapArrayIndexes } from './helpers/array'
import {
  compareCardValidity,
  resetCard
} from './helpers/uno'

export default class App extends React.Component {

  constructor() {
    super()

    // Setup the game
    this.state = setupGameWithState()

    // Distribute cards, new game
    this.state.players.forEach((player, id) => {
      this.dealCardsToPlayer(id, this.state.game.startingCards)
    })

    // this.createDeadlineAction(() => {
    //   this.setState({
    //     activePlayerTurn: 0
    //   })
    // }, 2)

    // Events

    onEvent('GameLogic/next-go', () => {
      this.setState({
        id: this.determineNextGo()
      })
      this.createDeadlineAction(() => {
        triggerEvent('GameLogic/timer-reached-zero')
      }, this.state.game.timeToMakeMove)
    })

    onEvent('GameLogic/timer-reached-zero', () => {
      triggerEvent('GameLogic/force-autoplay-card')

      this.createDeadlineAction(() => {
        triggerEvent('GameLogic/next-go')
      }, .5)
    })

    onEvent('HumanInterface/card-ordering-swap', (ce) => {
      const { players } = this.state
      const { playerId, sourceId, targetId } = ce
      players[playerId].cards = swapArrayIndexes(players[playerId].cards, sourceId, targetId)
      this.setState({
        players
      })
    })

    onEvent('GameLogic/force-autoplay-card', () => {
      const { activePlayerTurn } = this.state
      const activeCardFromPlayer = this.getPlayerActiveCard(activePlayerTurn)
      const activeCardOnPile = this.getActivePileCard()
      if (compareCardValidity(activeCardOnPile, activeCardFromPlayer)) {
        this.throwActiveCardFromPlayerToPile(activePlayerTurn)
      }
    })

    onEvent('GameLogic/card-added-to-pile', (ce) => {
      if (ce.card.type.startsWith('wild')) {
        triggerEvent('GameLogic/requests-flower')
      }
    })

    onEvent('GameLogic/requests-flower', () => {
      this.setState({
        flowerVisible: true
      })
      this.createDeadlineAction(() => {
        triggerEvent('Flower/selected-color', {
          color: 'red'
        })
      }, 3)
    })

    onEvent('Flower/selected-color', (ce) => {
      this.setPileWildColor(ce.color)
      triggerEvent('GameLogic/next-go')
    })

    // END DEBUG

    // Start the game
    setTimeout(() => {
      triggerEvent('GameLogic/next-go')
    }, 1000)

  }

  // Time
  createDeadlineAction(callback, durationSeconds) {
    clearTimeout(this.timer)
    this.timer = setTimeout(callback, durationSeconds * 1000)
  }

  // Moves
  determineNextGo() {
    const { game, activePlayerTurn } = this.state
    this.setState({
      activePlayerTurn: game.playDirection === 1 ? (activePlayerTurn < 3 ? activePlayerTurn + 1 : 0) : (activePlayerTurn > 0 ? activePlayerTurn - 1 : 3)
    })
    return this.state.activePlayerTurn
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
    this.state.masterDeck.push( resetCard(card) )
    this.setStateDefaults()
  }

  throwActiveCardFromPlayerToPile(playerId) {

    const { pileDeck, players } = this.state
    // Cache the card
    let card = this.getPlayerActiveCard(playerId)
    // Move a copy to the pile
    pileDeck.push(card)
    // Remove it from players hand
    players[playerId].cards.pop()
    // Update React
    this.setState({
      players,
      pileDeck
    })

    triggerEvent('GameLogic/card-added-to-pile', {
      card
    })
  }

  setStateDefaults() {
    const { players, masterDeck } = this.state
    this.setState({
      players,
      masterDeck
    })
  }

  getPlayerActiveCard(playerId) {
    const { players } = this.state
    return players[playerId].cards[players[playerId].cards.length - 1]
  }

  getActivePileCard() {
    const { pileDeck } = this.state
    return pileDeck[pileDeck.length - 1]
  }

  setPileWildColor(color) {
    const card = this.getActivePileCard()
    card.color = color
    const { pileDeck } = this.state
    pileDeck[pileDeck.length - 1] = card
    this.setState({
      pileDeck,
      flowerVisible: false
    })
  }

  render() {
    return (
      <>
      {
        this.state.players.map((player, id) => {
          return (<PlayerDeck key={id} id={id} player={player} active={this.state.activePlayerTurn === id} />)
        })
      }
      <MasterDeck cards={ this.state.masterDeck } />
      <Board />
      <PileDeck cards={ this.state.pileDeck } />
      <Flower visible={ this.state.flowerVisible }/>
      <DebugPanel content={ JSON.stringify( this.state , null, 2) } />
      </>
    )
  }
}
