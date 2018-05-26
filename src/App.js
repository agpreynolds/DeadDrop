import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/App.css';
import TimerSetup from './TimerSetup';
import Subscribe from './Subscribe';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header hidden">          
          <h1 className="App-title">Dead Drop</h1>
        </header>
        
          <Router>
            <div>
              <Route exact path="/" component={Subscribe} />
              <Route path="/timer" component={TimerSetup} />
            </div>
          </Router>         
          
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
