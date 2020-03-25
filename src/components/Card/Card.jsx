import React from 'react'
import './Card.scss'
import { triggerEvent } from '../../helpers/events'

export default class Card extends React.Component {

  constructor() {
    super()
    this.state = {
      flipped: false
    }
  }

  render() {
    const { value, color } = this.props.content
    return (
      <div className={ `${this.props.noWrapper ? '' : 'card__wrapper'} ${this.state.flipped ? ' flipped' : ''}` } onClick={() => this.handleClick(value)}>
        <div className={`card ${color}`}>
          { this.props.type }
          <div className="card__figure">{ value }</div>
          <div className="card__figure">{ value }</div>
          <div className="card__figure">{ value }</div>
          <div className="card__figure">{ value }</div>
        </div>
      </div>
    );
  }

  handleClick(id) {
    triggerEvent('Card/clicked', id)
  }
}
