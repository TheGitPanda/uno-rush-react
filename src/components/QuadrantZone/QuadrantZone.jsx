import React from 'react'
import './QuadrantZone.scss'
import { triggerEvent } from '../../helpers/events'
import { keyQuery } from '../../helpers/keypress-mappings'
import PlayerDeck from '../PlayerDeck/PlayerDeck'
import PlayerInfo from '../PlayerInfo/PlayerInfo'

export default class QuadrantZone extends React.Component {

  constructor (props) {
    super()
    const stateToSet = {
      isHumanInterface: false
    }

    // Setup Quadrant UI for human player (one supported currently)
    if (!props.player.ai) {
      stateToSet.isHumanInterface = true
      this.bindKeysForHuman()
    }

    this.state = stateToSet
  }

  bindKeysForHuman() {
    document.addEventListener('keydown', (e) => {
      switch (keyQuery(e)) {
        case 'left':
        // TODO smooth repaints for user to change order of cards, requestKeyframeAnimation
        break;
        case 'right':
        // TODO
        break;
        case 'up':
        triggerEvent('GameLogic/go')
        break;
        default:
      }
    })
  }

  componentDidUpdate() {
    if (this.props.active) {
      triggerEvent('QuadrantZone/received-activity')
    }
  }

  render() {
    const { cards, name } = this.props.player
    return (
      <div className={`quadrantZone z-${ this.props.id } ${ this.props.active ? 'active' : '' }`} onClick={ () => this.removeCards }>
        <PlayerDeck cards={ cards } />
        <PlayerInfo name={ name } />
      </div>
    );
  }

  removeCards() {
    this.props.player.cards.shift()
    this.render()
  }
}
