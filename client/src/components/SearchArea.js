import React, { Component } from 'react';
import "../styles/SearchArea.css"

class SearchArea extends Component {
    constructor(props){
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }
    render() {
        return (
            <form>
                <input type="text" value={this.state.value} className="search-area" onChange={this.handleChange}/>
                <button type="button" onClick={()=>this.props.handleSubmit(this.state.value)}>Search</button>
            </form>
        );
    }
}

export default SearchArea;