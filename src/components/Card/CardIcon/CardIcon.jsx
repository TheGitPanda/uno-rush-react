import React from 'react'
import './CardIcon.scss'

export default class CardIcon extends React.Component {

  render() {

    let elem

    if (this.props.type === 'standard') {
      elem = (
        <div>{ this.props.value }</div>
      )
    } else if (this.props.type === 'wild' || this.props.type === 'wilddraw') {
      elem = (
        <div className="cardIcon__wild">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )
    }

    return (
      <div className={`cardIcon ${ this.props.color } ${ this.props.type }`}>
        <div>
          { elem }
        </div>
      </div>
    );
  }
}
