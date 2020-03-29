import React from 'react'
import './HumanInterface.scss'
import Card from '../../Card/Card'
import { keyQuery } from '../../../helpers/keypress-mappings'
import { triggerEvent } from '../../../helpers/events'

export default class HumanInterface extends React.Component {

  constructor() {
    super()
    this.bindKeysForHuman()
  }

  render() {
    return (
      <div className="humanInterface">
        {
          this.props.cards.map((card, i) => {
            return (
              <div className="humanInterface__slot">
                <Card key={i} content={card} draggable={ true } />
              </div>
            )
          })
        }
      </div>
    );
  }

  bindKeysForHuman() {
    document.addEventListener('keydown', (e) => {
      switch (keyQuery(e)) {
        case 'left':
        // TODO smooth repaints for user to change order of cards, requestKeyframeAnimation
        break;
        case 'right':
        // TODO
        break;
        case 'up':
        triggerEvent('GameLogic/go')
        break;
        default:
      }
    })
  }
}
