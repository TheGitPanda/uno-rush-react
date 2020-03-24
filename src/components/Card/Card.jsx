import React from 'react'
import './Card.scss'
import { triggerEvent } from '../../helpers/events'

export default class Card extends React.Component {

  constructor() {
    super()
    this.state = {
      value: 1,
      flipped: false
    }
  }

  render() {
    console.log('updated')
    return (
      <div className={ `card__wrapper${this.state.flipped ? ' flipped' : ''}` } onClick={() => this.handleClick(this.state.value)}>
        <div className="card">
          <div className="card__figure">{ this.state.value }</div>
          <div className="card__figure">{ this.state.value }</div>
          <div className="card__figure">{ this.state.value }</div>
          <div className="card__figure">{ this.state.value }</div>
        </div>
      </div>
    );
  }

  handleClick(id) {
    triggerEvent('Card/clicked', id)
    this.setState({flipped: !this.state.flipped})
  }
}
