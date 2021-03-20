import React, { Component } from 'react';

class EmptyDetails extends Component {
    render() {
        return (
            <ul className="details">
                <li>Name:</li>
                <li>Height:</li>
                <li>Weight:</li>
                <li>Types: </li>
            </ul>
        );
    }
}

export default EmptyDetails;