import React from 'react'
import './Flower.scss'

export default class Flower extends React.Component {
  render() {
    return (
      <div className="flower">
        <div className="flower__petal red"></div>
        <div className="flower__petal yellow"></div>
        <div className="flower__petal green"></div>
        <div className="flower__petal blue"></div>
      </div>
    );
  }
}
