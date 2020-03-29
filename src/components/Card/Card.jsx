import React from 'react'
import './Card.scss'
import CardIcon from './CardIcon/CardIcon'

export default class Card extends React.Component {

  render() {
    const { value, color, type } = this.props.content
    let valueText = type.startsWith('wild') ? `+${value}` : value
    return (
      <div className={ this.parentClassName(color) } onClick={() => this.handleClick(value)}>
        <div className="card__front">
          <div className="card__figure">{ valueText }</div>
          <div className="card__figure">{ valueText }</div>
          <div className="card__figure">{ valueText }</div>
          <div className="card__figure">{ valueText }</div>
          <CardIcon color={ color } value={ value } />
        </div>
        <div className="card__back">
          <img src="/images/uno-logo.svg" alt="UNO!" />
        </div>
      </div>
    );
  }

  parentClassName(color) {
    return `card ${color}${this.props.flipped ? ' flipped' : ''}${this.props.draggable ? ' draggable' : ''}`
  }

  handleClick(id) {
    this.setState({flipped: !this.props.flipped})
    // triggerEvent('Card/clicked', id)
  }
}
