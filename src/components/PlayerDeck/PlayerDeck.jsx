import React from 'react'
import './PlayerDeck.scss'
import AiInterface from './AiInterface/AiInterface'
import HumanInterface from './HumanInterface/HumanInterface'
import { onEvent } from './../../helpers/event'

export default class PlayerDeck extends React.Component {

  constructor () {
    super()

    onEvent('GameLogic/another-reason-before-timer-runs-out', (ce) => {
      // only fire when before timer triggerEvent('PlayerDeck/has-finished-move')
    })
  }

  render() {
    const { ai, cards } = this.props.player
    return (
      <div className={ this.props.active ? 'active' : '' }>
        { ai ? <AiInterface id={ this.props.id } cards={ cards } /> : <HumanInterface id={ this.props.id } cards={ cards } /> }
      </div>
    )
  }
}
