import React from 'react'
import './QuadrantZone.scss'
import Deck from './Deck'

export default class QuadrantZone extends React.Component {
  render() {
    return (
      <div className={`quadrantZone z-${ this.props.position }`}>
        {this.props.name}
        <Deck />
      </div>
    );
  }
}
