import React from 'react'
import './QuadrantZone.scss'
import PlayerDeck from '../PlayerDeck/PlayerDeck'

export default class QuadrantZone extends React.Component {
  render() {
    return (
      <div className={`quadrantZone z-${ this.props.id }`}>
        {this.props.name}
        <PlayerDeck cards={this.props.cards} />
      </div>
    );
  }
}
