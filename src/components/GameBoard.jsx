import React from 'react'
import './GameBoard.scss'
import QuadrantZone from './QuadrantZone'

export default class GameBoard extends React.Component {
  render() {
    return (
      <>
      <QuadrantZone name="Bradley" position="1" />
      <QuadrantZone name="Sarah" position="2" />
      <QuadrantZone name="Ant" position="3" />
      <QuadrantZone name="Declan" position="4" />
      </>
    );
  }
}
