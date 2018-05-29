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

                <div className="player-select">
                    <button onClick={this.handleLessClicked} className="player-select--reduce" disabled={this.props.noOfPlayers < 3}>
                        <i className="icon icon--red-pointer icon--rotate-90"></i>
                        <span className="hidden">Reduce number of players</span>
                    </button>
                    <span className="players">{this.props.noOfPlayers}</span>
                    <button onClick={this.handleMoreClicked} className="player-select--increase" disabled={this.props.noOfPlayers > 4}>
                        <i className="icon icon--red-pointer icon--rotate-270"></i>
                        <span className="hidden">Increase number of players</span>
                    </button>
                </div>
                
                <button className="button button--small" onClick={this.props.onNext}>Next</button>
            </div>
        );
    }
}

export default PlayerSelection;
