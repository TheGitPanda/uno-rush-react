import React from 'react'
import './GameBoard.scss'
import QuadrantZone from './QuadrantZone'

export default class GameBoard extends React.Component {
  render() {
    return (
      <>
      <QuadrantZone name="Bradley" position="1" />
      <QuadrantZone name="Bradley" position="2" />
      <QuadrantZone name="Bradley" position="3" />
      <QuadrantZone name="Bradley" position="4" />
      </>
    );
  }
}
