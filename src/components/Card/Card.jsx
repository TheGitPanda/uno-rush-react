import React from 'react'
import './Card.scss'

export default class Card extends React.Component {
  render() {
    return (
      <div className="card__wrapper">
        <div className="card">
          <div className="card__figure">1</div>
          <div className="card__figure">1</div>
          <div className="card__figure">1</div>
          <div className="card__figure">1</div>
        </div>
      </div>
    );
  }
}
