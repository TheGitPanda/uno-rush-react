import React from 'react'
import './PlayerDeck.scss'
import AiInterface from './AiInterface/AiInterface'
import HumanInterface from './HumanInterface/HumanInterface'

export default class PlayerDeck extends React.Component {

  render() {
    const { ai, cards } = this.props.player
    return (
      ai ? <AiInterface id={ this.props.id } cards={ cards } /> : <HumanInterface id={ this.props.id } cards={ cards } />
    )
  }
}
