import React, { Component } from 'react';

class Type extends Component {
    render() {
        return (
            <span onClick={this.props.showType}>{`${this.props.type} `}</span>
        );
    }
}

export default Type;