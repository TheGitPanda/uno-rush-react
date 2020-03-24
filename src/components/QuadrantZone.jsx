import React from 'react'
import './QuadrantZone.scss'

export default class QuadrantZone extends React.Component {
  render() {
    return (
      <div className={`quadrantZone z-${ this.props.position }`}>
        {this.props.name}
      </div>
    );
  }
}
