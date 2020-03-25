import React from 'react'
import './PlayerInfo.scss'

export default class PlayerInfo extends React.Component {
  render() {
    return (
      <div className="playerInfo">
        <div className="playerInfo__picture">
          <img src="" alt={ this.props.name } />
        </div>
        <h2 className="playerInfo__name">
          { this.props.name }
        </h2>
      </div>
    );
  }
}
