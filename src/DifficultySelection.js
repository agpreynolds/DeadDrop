import React, { Component } from 'react';

class DifficultySelection extends Component {
    
    getTimerLength = (difficulty) => {
        if (difficulty === 2) {
            return this.props.noOfPlayers * 4;
        } else if (difficulty === 1) {
            return this.props.noOfPlayers * 5;
        } else {
            return 0;
        }
    }

    getTimerListItem = (difficulty) => {
        const length = this.getTimerLength(difficulty);
        let text;
        if (length > 0) {
            text = `${length} minute timer`;
        } else {
            text = "No timer";
        }

        return ( <li>{text}</li> );
    }
    
    render() {
        return (
            <div>
                <h2>Difficulty</h2>
                <div className="panel difficulty difficulty--easy" onClick={() => this.props.onSelectionChanged(0)}>
                    <h2>Easy</h2>
                    <ul>
                        {this.getTimerListItem(0)}
                        <li>Fewer Lethal Cards</li>
                        <li>No jokers</li>
                    </ul>
                </div>
                <div className="panel difficulty difficulty--normal" onClick={() => this.props.onSelectionChanged(1)}>
                    <h2>Normal</h2>
                    <ul>
                        {this.getTimerListItem(1)}
                        <li>Some Lethal Cards</li>
                    </ul>
                </div>
                <div className="panel difficulty difficulty--hard" onClick={() => this.props.onSelectionChanged(2)}>
                    <h2>Hard</h2>
                    <ul>
                        {this.getTimerListItem(2)}
                        <li>More Lethal Cards</li>
                    </ul>
                </div>

                <button onClick={this.props.onBack}>Previous</button>
                <button onClick={this.props.onNext}>Next</button>
            </div>
        );
    }
}

export default DifficultySelection;
