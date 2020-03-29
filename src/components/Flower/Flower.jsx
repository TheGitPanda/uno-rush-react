import React from 'react'
import './Flower.scss'
import { triggerEvent } from '../../helpers/event'

export default class Flower extends React.Component {

  render() {
    return (
      <div className={ `flower${ this.props.visible ? ' visible' : ''}` }>
        <div className="flower__petal red" onClick={ () => this.selectColor('red') }></div>
        <div className="flower__petal yellow" onClick={ () => this.selectColor('yellow') }></div>
        <div className="flower__petal green" onClick={ () => this.selectColor('green') }></div>
        <div className="flower__petal blue" onClick={ () => this.selectColor('blue') }></div>
      </div>
    );
  }

  selectColor(color) {
    triggerEvent('Flower/color-selected', color)
  }
}
