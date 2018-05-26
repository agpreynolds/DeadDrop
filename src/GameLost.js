import React, { Component } from 'react';
import logo from './assets/img/logo.png';

class GameLost extends Component {
  render() {
    return (
        <div>
            <h2>Everyone is dead!</h2>
            <p>Wow! That took a turn for the worst. Looks like it's time for you to claim the next victory!</p>
            <button onClick={this.props.onPlayAgainClicked}>Play Again</button>
        </div>
    );
  }
}

export default GameLost;
