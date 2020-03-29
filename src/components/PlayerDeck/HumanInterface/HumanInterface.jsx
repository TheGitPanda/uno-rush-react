import React from 'react'
import './HumanInterface.scss'
import Card from '../../Card/Card'
import { triggerEvent } from '../../../helpers/event'

export default class HumanInterface extends React.Component {

  constructor() {
    super()

    this.state = {
      selectedCard: null
    }
  }

  render() {
    return (
      <div className="humanInterface">
        {
          this.props.cards.map((card, i) => {
            return (
              <div key={i} className={ `humanInterface__slot${ this.state.selectedCard === i ? ' selected' : '' }` } onClick={ () => this.selectCard(i) }>
                <Card content={card} draggable={ true } />
              </div>
            )
          })
        }
      </div>
    );
  }

  selectCard(cardId) {

    const { selectedCard } = this.state

    if (selectedCard !== null) {

      if (cardId !== selectedCard) {
        triggerEvent('HumanInterface/card-ordering-swap', {
          sourceId: this.state.selectedCard,
          targetId: cardId,
          playerId: this.props.id
        })
      }

      this.setState({
        selectedCard: null
      })
    } else {
      this.setState({
        selectedCard: cardId
      })
    }
  }
}
