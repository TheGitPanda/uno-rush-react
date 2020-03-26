import React from 'react'
import './CardIcon.scss'

export default class CardIcon extends React.Component {

  render() {
    return (
      <div className={`cardIcon ${ this.props.color }`}>
        <div>
          { this.props.value }
        </div>
      </div>
    );
  }
}
