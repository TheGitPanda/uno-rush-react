import React from 'react'
import './Board.scss'
import { triggerEvent } from '../../helpers/events'
import PlayerDeck from '../PlayerDeck/PlayerDeck'
import PlayerAiDeck from '../PlayerAiDeck/PlayerAiDeck'
import PlayerInfo from '../PlayerInfo/PlayerInfo'

export default class QuadrantZone extends React.Component {

  constructor (props) {
    super()
    const stateToSet = {
      isHumanInterface: false
    }

    this.state = stateToSet
  }

  render() {
    const { cards, name, ai } = this.props.player
    return (
      <div className={`board z-${ this.props.id } ${ this.props.active ? 'active' : '' }`} onClick={ () => this.removeCards }>
        { ai ? <PlayerAiDeck cards={ cards } /> : <PlayerDeck cards={ cards } /> }
        <PlayerInfo name={ name } />
      </div>
    );
  }

  removeCards() {
    this.props.player.cards.shift()
    this.render()
  }
}
