import React, { Component } from 'react';

class Summary extends Component {
  render() {
    return (
        <div>
            <h2>Your Game</h2>

            Number of Players: {this.props.noOfPlayers}
            Difficulty: {this.props.difficulty}
        </div>
    );
  }
}

export default Summary;
