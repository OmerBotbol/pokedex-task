import React, { Component } from 'react';

class SearchArea extends Component {
    render() {
        return (
            <div>
                <input className="search-area"/>
                <button type="submit">Search</button>
            </div>
        );
    }
}

export default SearchArea;