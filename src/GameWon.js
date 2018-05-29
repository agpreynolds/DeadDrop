import React, { Component } from 'react';

class GameLost extends Component {
  render() {
    return (
        <div>
            <h2 className="page-title">Congratulations!</h2>
            <p>You won! Do you think you can keep the victories coming?</p>
            <button onClick={this.props.onPlayAgainClicked}>Play Again</button>
        </div>
    );
  }
}

export default GameLost;
