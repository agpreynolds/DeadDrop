import React, { Component } from 'react';

class TwitterShare extends Component {
    
    render() {
        const intentUrl = "https://www.twitter.com/intent/tweet"; 
        const encodedUrl = `${intentUrl}?text=${encodeURIComponent(this.props.content)}`;
        
        return (
            <div>
                <h3>{this.props.title}</h3>
                <div className='twitter-content'>{this.props.content}</div>
                <a href={encodedUrl}>Tweet it</a>
            </div>
        );
    }
}

export default TwitterShare;
