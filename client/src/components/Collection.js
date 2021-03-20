import React, { Component } from 'react'
import axios from 'axios';

export default class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: [],
        }
    }

    componentDidMount() {
        axios.get("/api/collection")
        .then( ({data}) => this.setState({collection: data}));  
    }

    render() {
        
        return (
            <div className="collection-pokemon">
                <ul>
                    {this.state.collection.map((pokemon, i) => <li key={i}>{pokemon.name}</li>)}
                </ul>
            </div>
        )
    }
}