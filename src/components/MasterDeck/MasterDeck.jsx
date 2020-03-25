import React from 'react'
import './MasterDeck.scss'
import Card from '../Card/Card'

export default class MasterDeck extends React.Component {
  render() {
    return (
      <div className="masterDeck">
        <Card no-wrapper flipped content={this.props.cards[0]} />
      </div>
    );
  }
}
