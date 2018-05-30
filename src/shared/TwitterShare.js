import React, { Component } from 'react';

class TwitterShare extends Component {
  render() {
    return (
        <div>
            <h3>{this.props.title}</h3>
            <div className='twitter-content'>{this.props.content}</div>
            <button>Tweet it</button>
        </div>
    );
  }
}

export default TwitterShare;
