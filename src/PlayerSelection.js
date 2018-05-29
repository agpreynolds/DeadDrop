import React, { Component } from 'react';

class PlayerSelection extends Component {
    
    handleChange = (event) => {
        this.props.onSelectionChanged(event.target.value);        
    }

    handleLessClicked = () => {
        this.props.onSelectionChanged(this.props.noOfPlayers - 1);
    }

    handleMoreClicked = () => {
        this.props.onSelectionChanged(this.props.noOfPlayers + 1);
    }

    render() {
        return (
            <div>
                <h2 className="page-title">Number of Players</h2>

                <div>
                    <button onClick={this.handleLessClicked} disabled={this.props.noOfPlayers < 3}>Less</button>
                    <span>{this.props.noOfPlayers}</span>
                    <button onClick={this.handleMoreClicked} disabled={this.props.noOfPlayers > 4}>Up</button>
                </div>
                
                <button className="button button--small" onClick={this.props.onNext}>Next</button>
            </div>
        );
    }
}

export default PlayerSelection;
