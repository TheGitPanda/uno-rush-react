import React from 'react'
import './GameBoard.scss'
import QuadrantZone from '../QuadrantZone/QuadrantZone'
import DebugPanel from '../DebugPanel/DebugPanel'

export default class GameBoard extends React.Component {
  render() {
    return (
      <>
      <QuadrantZone name="Bradley" position="1" />
      <QuadrantZone name="Bradley" position="2" />
      <QuadrantZone name="Bradley" position="3" />
      <QuadrantZone name="Bradley" position="4" />

      <DebugPanel content={ JSON.stringify(this.props.deck, null, 2) } />
      </>
    );
  }
}
