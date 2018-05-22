import React, { Component } from 'react';
import './styles/App.css';
import PlayerSelection from './PlayerSelection';
import DifficultySelection from './DifficultySelection';
import Feedback from './Feedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Dead Drop</h1>
        </header>
        
          <PlayerSelection></PlayerSelection>
          <DifficultySelection></DifficultySelection>       
          <Feedback></Feedback>
      </div>
    );
  }
}

export default App;
