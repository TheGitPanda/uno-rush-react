import React from 'react'
import './PileDeck.scss'
import Card from '../Card/Card'

export default class PileDeck extends React.Component {
  render() {
    return (
      <div className="pileDeck">
        <Card no-wrapper content={this.props.cards[0]} />
      </div>
    );
  }
}
