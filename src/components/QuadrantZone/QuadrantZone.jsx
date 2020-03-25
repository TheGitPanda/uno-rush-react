import React from 'react'
import './QuadrantZone.scss'
import { triggerEvent } from '../../helpers/events'
import PlayerDeck from '../PlayerDeck/PlayerDeck'
import PlayerInfo from '../PlayerInfo/PlayerInfo'

export default class QuadrantZone extends React.Component {
  render() {
    return (
      <div className={`quadrantZone z-${ this.props.id } ${ this.props.active ? 'active' : '' }`}>
        {this.props.name}
        <PlayerDeck cards={this.props.cards} />
        <PlayerInfo name={this.props.name} />
      </div>
    );
  }

  componentDidUpdate() {
    if (this.props.active) {
      triggerEvent('QuadrantZone/received-activity')
    }
  }
}
