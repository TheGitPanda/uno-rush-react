import React from 'react'
import './AiInterface.scss'
import Card from '../../Card/Card'

export default class AiInterface extends React.Component {
  render() {
    return (
      <div className={ `aiInterface z-${ this.props.id }` }>
      {
        this.props.cards.map((card, i) => {
          return (
            <div className="aiInterface__slot" key={i}>
              <Card content={card} flipped={ true } />
            </div>
          )
        })
      }
      </div>
    );
  }
}
