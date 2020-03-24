import React from 'react'
import './DebugPanel.scss'

export default class DebugPanel extends React.Component {
  render() {
    return (
      <div className="debugPanel">
        { this.props.content }
      </div>
    );
  }
}
