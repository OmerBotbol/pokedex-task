import React, { Component } from 'react';

class Type extends Component {
    render() {
        return (
            <span>{`${this.props.type} `}</span>
        );
    }
}

export default Type;