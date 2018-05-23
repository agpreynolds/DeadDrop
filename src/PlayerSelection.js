import React, { Component } from 'react';

class PlayerSelection extends Component {
    
    handleChange = (event) => {
        this.props.onSelectionChanged(event.target.value);        
    }

    render() {
        return (
            <div>
                <h2>Number of Players</h2>
                <input type="number" name="players" value={this.props.noOfPlayers} onChange={this.handleChange}/>
                <button>Next</button>
            </div>
        );
    }
}

export default PlayerSelection;
