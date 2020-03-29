import React from 'react'
import './Board.scss'

export default class Board extends React.Component {

  render() {
    return (
      <>
        <div className="board" onClick={ () => this.removeCards }></div>
        <img className="board__arrows" src="/images/arrows.svg" alt="Arrows" />
      </>
    );
  }
}
