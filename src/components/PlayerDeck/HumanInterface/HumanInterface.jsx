import React from 'react'
import './HumanInterface.scss'
import Card from '../../Card/Card'
import { triggerEvent, onEvent } from '../../../helpers/event'

export default class HumanInterface extends React.Component {

  constructor() {
    super()

    this.state = {
      selectedCard: null
    }

    onEvent('Game/human-card-swapped', (id) => {
      this.selectCard(id)
    })
  }

  render() {
    return (
      <div className="humanInterface" onMouseUp={ () => this.deselectCard() }>
        {
          this.props.cards.map((card, i) => {
            return (
              <div key={i} className={ `humanInterface__slot${ this.state.selectedCard === i ? ' selected' : '' }` } onMouseDown={ () => this.selectCard(i) } onMouseEnter={ () => this.swapCardTo(i) }>
                <Card content={card} draggable={ true } />
              </div>
            )
          })
        }
      </div>
    );
  }

  selectCard(id) {
    this.setState({
      selectedCard: id
    })
  }

  swapCardTo(i) {

    if (this.state.selectedCard === null) {
      return
    }

    const { selectedCard } = this.state
    triggerEvent('HumanInterface/card-ordering-swap', {
      sourceId: selectedCard,
      targetId: i,
      playerId: this.props.id
    })
  }

  deselectCard() {

    this.setState({
      selectedCard: null
    })
  }
}
