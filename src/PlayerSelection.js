import React, { Component } from 'react';

class PlayerSelection extends Component {
  render() {
    return (
        <div>
            <h2>Number of Players</h2>
            <input type="number"/>
            <button>Next</button>
        </div>
    );
  }
}

export default PlayerSelection;
