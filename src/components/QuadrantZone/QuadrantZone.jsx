import React from 'react'
import './QuadrantZone.scss'
import PlayerDeck from '../PlayerDeck/PlayerDeck'
import { triggerEvent } from '../../helpers/events'

export default class QuadrantZone extends React.Component {
  render() {
    return (
      <div className={`quadrantZone z-${ this.props.id } ${ this.props.active ? 'active' : '' }`}>
        {this.props.name}
        <PlayerDeck cards={this.props.cards} />
      </div>
    );
  }

  componentDidUpdate() {
    if (this.props.active) {
      triggerEvent('QuadrantZone/received-activity')
    }
  }
}
