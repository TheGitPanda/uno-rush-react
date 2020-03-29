import React from 'react'
import './Card.scss'
import CardIcon from './CardIcon/CardIcon'

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
      <div className={`card ${color}${this.state.flipped ? ' flipped' : ''}`} onClick={() => this.handleClick(value)}>
        <div className="card__front">
          <div className="card__figure">{ value }</div>
          <div className="card__figure">{ value }</div>
          <div className="card__figure">{ value }</div>
          <div className="card__figure">{ value }</div>
          <CardIcon color={ color } value={ value } />
        </div>
        <div className="card__back">
          <img src="/images/uno-logo.svg" alt="UNO!" />
        </div>
      </div>
    );
  }

  handleClick(id) {
    this.setState({flipped: !this.state.flipped})
    // triggerEvent('Card/clicked', id)
  }
}
