import React, { Component } from 'react';

class GameLost extends Component {
  render() {
    return (
        <div>
            <h2 className="page-title">Everyone is dead!</h2>
            <p>Wow! That took a turn for the worst. Looks like it’s time for you to claim the next victory!</p>
            <button onClick={this.props.onPlayAgainClicked}>Play Again</button>
        </div>
    );
  }
}

export default GameLost;
